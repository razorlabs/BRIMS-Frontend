import gql from 'graphql-tag';

export const GET_REDIRECT_URL = gql`
  {
    redirectUrl
  }
`;

export const LOGOUT = gql`
  mutation LOGOUT {
    deleteTokenCookie{
      deleted
    }
    deleteTokenRefresh{
      deleted
    }
  }
`;

