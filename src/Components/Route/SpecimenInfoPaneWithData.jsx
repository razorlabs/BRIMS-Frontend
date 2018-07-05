import { graphql } from 'react-apollo';
import SpecimenInfoPane from '../Layout/Specimen/SpecimenInfoPane';
import { GET_SPECIMEN_BY_PATIENT_ID } from '../Data/SpecimenData';

const SpecimenInfoPaneWithData = graphql(GET_SPECIMEN_BY_PATIENT_ID, {
  options: props => ({
    variables: {
      patientid: (props.match.params.id),
    },
  }),
})(SpecimenInfoPane);

export default SpecimenInfoPaneWithData;
