import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation tokenAuth($username: String!, $password: String!){
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
