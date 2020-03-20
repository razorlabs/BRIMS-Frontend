import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation tokenAuth($username: String!, $password: String!){
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

export const GET_USER = gql`
  {
    me {
      id
      username
    }
  }
`;
