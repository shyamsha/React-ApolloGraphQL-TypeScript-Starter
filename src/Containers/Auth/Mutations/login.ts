import gql  from "graphql-tag";


export const Login = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      jwtToken
      user {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }
  }
`;
