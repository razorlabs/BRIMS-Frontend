import gql from 'graphql-tag';

export const ADD_PATIENT = gql`
  mutation createPatient($id: ID!, $pid: String!, $externalid: String!) {
    createPatient(id: $id, pid: $pid, externalid: $externalid) {
      id
      pid
      externalid
    }
  }
`;
