import gql from 'graphql-tag';

export const ADD_SPECIMEN = gql`
  mutation createSpecimen(
    $patient: Int!,
    $specimentype: Int!,
    $volume: Float!,
    $collectDate: Date!,
    $collectTime: Time!,
    $notes: String!)
    {
      createSpecimen(
        patient:$patient,
        specimentype: $specimentype,
        volume: $volume,
        collectdate: $collectDate,
        collecttime: $collectTime,
        notes: $notes,) {
          id
          specimentype
          volume
          collectdate
          collecttime
          notes
       }
    }
`;

export const ADD_ALIQUOT = gql`
  mutation createAliquot(
    $specimenid: Int!,
    $aliquottype: Int!,
    $visit: Int!,
    $volume: Float!,
    $collectdate: Date!,
    $collecttime: Time!,
    $notes: String!,
    $times: Int!)
    {
      createAliquot(
        specimenid:$specimenid,
        aliquottype: $aliquottype,
        visit: $visit,
        volume: $volume,
        collectdate: $collectdate,
        collecttime: $collecttime,
        notes: $notes,
        times: $times,) {
          aliquottype
          visit
          volume
          collectdate
          collecttime
          notes
       }
    }
`;
