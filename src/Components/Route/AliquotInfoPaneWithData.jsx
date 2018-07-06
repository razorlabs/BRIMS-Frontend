import { graphql } from 'react-apollo';
import AliquotInfoPane from '../Layout/Specimen/AliquotInfoPane';
import { GET_ALIQUOT_BY_SPECIMEN_ID } from '../Data/SpecimenData';

const AliquotInfoPaneWithData = graphql(GET_ALIQUOT_BY_SPECIMEN_ID, {
  options: props => ({
    variables: {
      specimenid: (props.specimenid),
    },
  }),
})(AliquotInfoPane);

export default AliquotInfoPaneWithData;
