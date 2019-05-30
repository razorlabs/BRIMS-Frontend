import gql from 'graphql-tag';

export const ADD_CONTAINER = gql`
  mutation createContainer($name: String!) {
    createContainer(name: $name) {
      name
    }
  }
`;
