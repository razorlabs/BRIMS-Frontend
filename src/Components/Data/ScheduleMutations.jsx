import gql from 'graphql-tag';

export const ADD_EVENT = gql`
  mutation createEvent($event: String!, $order: Int!) {
    createEvent(event: $event, order: $order) {
      event
      order
    }
  }
`;
