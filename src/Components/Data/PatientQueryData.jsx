import gql from 'graphql-tag';

export const GET_PATIENT_BY_ID = gql`
  query($patientid: Int!) {
    patient(id: $patientid) {
      id
      pid
      externalId
    }
  }
`;

export const GET_ALL_PATIENTS = gql`
  {
    allPatients {
      id
      pid
      externalId
      source
      synced
      syncDate
    }
  }
`;
