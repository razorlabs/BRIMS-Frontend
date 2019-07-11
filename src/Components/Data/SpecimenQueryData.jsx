import gql from 'graphql-tag';

export const SEARCH_SPECIMEN = gql`
  query($patient: String!) {
    searchSpecimen(patient: $patient)
    {
      pid
    }
  }
`;

export const GET_SPECIMEN_TYPES = gql`
  {
    allSpecimenTypes {
      id
      type
    }
  }
`;


export const GET_ALL_SPECIMEN = gql`
  {
    allSpecimen {
      id
      patientid
      type
      collectdate
      collecttime
      volume
      patient
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
