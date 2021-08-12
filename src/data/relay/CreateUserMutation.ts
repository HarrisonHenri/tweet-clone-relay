import { graphql } from 'relay-hooks';

export default graphql`
  mutation CreateUserMutation(
    $password: String!
    $email: String!
    $name: String!
  ) {
    createUser(password: $password, email: $email, name: $name) {
      id
    }
  }
`;
