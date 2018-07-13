// see https://github.com/apollographql/react-docs/blob/master/source/api-graphql.md
import { graphql } from 'react-apollo';
import PatientInfoPane from '../Layout/Specimen/PatientInfoPane';
import { GET_PATIENT_BY_ID } from '../Data/SpecimenData';

const DataTest = graphql(GET_PATIENT_BY_ID, {
  options: props => ({
    variables: {
      id: (props.match.params.id),
    },
  }),
})(PatientInfoPane);

export default DataTest;
