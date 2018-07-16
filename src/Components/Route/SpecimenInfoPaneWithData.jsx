import { graphql } from 'react-apollo';
import SpecimenInfoPane from '../Layout/Specimen/SpecimenInfoPane';
import { GET_SPECIMEN_BY_PATIENT_ID } from '../Data/SpecimenQueryData';

const SpecimenInfoPaneWithData = graphql(GET_SPECIMEN_BY_PATIENT_ID, {
  options: props => ({
    variables: {
      patientid: (props.patientid),
    },
  }),
})(SpecimenInfoPane);

export default SpecimenInfoPaneWithData;
