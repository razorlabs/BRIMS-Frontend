import gql from 'graphql-tag';

export const GET_PENDING_SHIPMENTS = gql`
  {
    allPendingshipments {
      id
      pid
      type
      aliquotid
      specimenid
      shipfrom
      shipto
      senddate
      recipient
      notes
    }
  }
`;

export const GET_PENDING_RECIEVING = gql`
  {
    allPendingrecievings {
      id
      item
      type
      shipfrom
      shipto
      senddate
      recipient
      notes
      recieved
    }
  }
`;
