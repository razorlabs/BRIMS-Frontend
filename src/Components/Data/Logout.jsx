import gql from 'graphql-tag';

export const LOGOUT = gql`
  mutation LOGOUT {
    deleteTokenCookie{
      deleted
    }
    deleteTokenRefresh{
      deleted
    }
    logout{
      redirect
    }
  }
`;

