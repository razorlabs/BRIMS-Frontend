import gql from 'graphql-tag';

export const GET_ALL_PATIENTS = gql`
  {
    allPatients {
      id
      pid
      externalId
    }
  }
`;

export const GET_PATIENT_BY_ID = gql`
  query($patientid: Int!) {
    patient(id: $patientid) {
      id
      pid
      externalId
    }
  }
`;

export const GET_SPECIMEN_BY_PATIENT_ID = gql`
  query($patientid: Int!) {
    allSpecimen(patient: $patientid)
      {
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
  query($specimenid: Int!) {
    allAliquot(specimen: $specimenid)
      {
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
