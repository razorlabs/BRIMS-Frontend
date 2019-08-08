import gql from 'graphql-tag';

export const GET_ALL_EVENTS = gql`
  {
    allEvents {
      event
      order
    }
  }
`;

export const GET_ALL_SCHEDULE = gql`
 {
    allSchedules {
      id
      name
      schedule
    }
  }
`;

export const GET_ALL_VISITS = gql`
 {
    allVisits {
      id
      label
    }
  }
`;
