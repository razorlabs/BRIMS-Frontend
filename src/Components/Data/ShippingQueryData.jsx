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

export const GET_PENDING_RECEIVING = gql`
  {
    allPendingreceivings {
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
