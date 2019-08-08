import gql from 'graphql-tag';

export const ADD_PATIENT = gql`
  mutation createPatient($pid: String!, $externalId: String!, $drawschedule: Int!) {
    createPatient(pid: $pid, externalId: $externalId, drawschedule: $drawschedule) {
      id
      pid
      externalId
    }
  }
`;
