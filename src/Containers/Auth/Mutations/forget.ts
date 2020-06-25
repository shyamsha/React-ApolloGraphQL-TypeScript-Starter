import gql from "graphql-tag";

export const Forget = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(input: { email: $email })
  }
`;
