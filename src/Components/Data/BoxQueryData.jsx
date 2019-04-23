import gql from 'graphql-tag';

export const GET_BOX_CONTENT = gql`
  {
    query($boxid: Int!) {
      allSlots(id: $boxid)
    }
  }
`;
