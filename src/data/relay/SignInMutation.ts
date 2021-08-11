import { graphql } from 'relay-hooks';

export default graphql`
  mutation SignInMutation($password: String!, $email: String!) {
    signIn(password: $password, email: $email) {
      token
      user {
        id
      }
    }
  }
`;
