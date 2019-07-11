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
