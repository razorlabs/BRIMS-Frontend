import { graphql } from 'react-apollo';
import PatientInfoPane from '../Layout/Specimen/PatientInfoPane';
import { GET_PATIENT_BY_ID } from '../Data/SpecimenData';

const PatientInfoPaneWithData = graphql(GET_PATIENT_BY_ID, {
  options: props => ({
    variables: {
      patientid: (props.patientid),
    },
  }),
})(PatientInfoPane);

export default PatientInfoPaneWithData;
