import gql from 'graphql-tag';

export const ALL_QUERY = gql`
  query allQuery($patient: Boolean, $specimen: Boolean, $aliquot: Boolean, first: $first, skip: $skip) {
    allPatients @skip(if: $patient) {
      id
      pid
      externalId
      source
      synced
      syncDate
    },
    allSpecimen @skip(if: $specimen) {
      id
      patientid
      type
      collectdate
      collecttime
      volume
      patient
    },
    allAliquot @skip(if: $aliquot) {
      id
      specimenid
      visit
      collectdate
      collecttime
      volume
      notes
    },
  }
`;
