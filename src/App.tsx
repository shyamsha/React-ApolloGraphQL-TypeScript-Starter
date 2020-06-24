import React, { Fragment } from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import {withClientState} from "apollo-link-state"
import { GraphQLError, ExecutionResult } from "graphql";
import { ServerError, ServerParseError } from "apollo-link-http-common";
import "./App.css";
import AppNavigator from "./navigator/AppNavigator";

export interface ErrorResponse {
  graphQLErrors?: ReadonlyArray<GraphQLError>;
  networkError?: Error | ServerError | ServerParseError;
  response?: ExecutionResult;
}

const error = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const logoutLink = onError(({ networkError }) => {
  if (networkError!==undefined && (networkError as ServerError).statusCode === 401) localStorage.removeItem("x-session-id");
});

const token = localStorage.getItem("x-session-id") as string;

const httpLink = new HttpLink({
  uri: localStorage.getItem("x-session-id")
    ? "http://35.154.137.46:3000/query"
    : "https://auth-service-base.mindship.tech/query",
  headers: {
    Authorization: token
      ? `Bearer ${localStorage.getItem("x-session-id")}`
      : "",
  },
  fetch,
});

const cache= new InMemoryCache({
  addTypename: false,
})

const defaultState={
  dashboard:{}
}

const stateLink = withClientState({
  cache,
  defaults:defaultState,
  resolvers:{}
})

const createApolloClient = () => {
  return new ApolloClient({
    link: ApolloLink.from([stateLink, httpLink, logoutLink, error]),
    cache: cache,
    connectToDevTools: true,
  });
};

const client = createApolloClient();

function App() {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    </Fragment>
  );
}

export default App;
