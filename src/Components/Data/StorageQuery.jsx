import gql from 'graphql-tag';

export const GET_ALL_STORAGE = gql`
  {
    allStorage {
      id
      name
      description
      cssIcon
    }
  }
`;

export const GET_STORAGE_UI = gql`
  {
    storageUi {
      key
      title
      content {
        name
      }
      cssIcon
      boxes {
        id
      }
      topLevel
    }
  }
`;

