import gql from 'graphql-tag';

export const GET_ALL_PATIENTS = gql`
  {
    allPatients {
      id
      pid
      externalid
      specimen
    }
  }
`;

export const GET_PATIENT_BY_ID = gql`
  query($id: ID!) {
    Patient(id: $id) {
      id
      pid
      externalid
      specimen
    }
  }
`;

export const GET_SPECIMEN_BY_PATIENT_ID = gql`
  query($patientid: String!) {
    allSpecimens(filter:
      {patientid: $patientid}) {
        id
        patientid
        type
        collectdate
        collecttime
        volume
      }
  }
`;

export const GET_ALIQUOT_BY_SPECIMEN_ID = gql`
  query($specimenid: String!) {
    allAliquots(filter:
      {specimenid: $specimenid}) {
        id
        specimenid
        visit
        collectdate
        collecttime
        volume
        notes
      }
  }
`;

