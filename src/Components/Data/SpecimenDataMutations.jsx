import gql from 'graphql-tag';

export const ADD_PATIENT = gql`
  mutation createPatient($pid: String!, $externalId: String!) {
    createPatient(pid: $pid, externalId: $externalId) {
      id
      pid
      externalId
    }
  }
`;
