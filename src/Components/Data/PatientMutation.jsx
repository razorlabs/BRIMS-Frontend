import gql from 'graphql-tag';

export const ADD_PATIENT = gql`
  mutation createPatient($pid: String!, $drawschedule: Int!) {
    createPatient(pid: $pid, drawschedule: $drawschedule) {
      id
      pid
    }
  }
`;

export const EDIT_PATIENT = gql`
  mutation editPatientPid($id: Int!, $pid: String!) {
    editPid(id: id, pid: $pid) {
      pid
    }
  }
`;
