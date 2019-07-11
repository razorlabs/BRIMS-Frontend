import { Table, Loader, Dimmer } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'react-apollo';
import AliquotTableHeader from './AliquotTableHeader';
import AliquotInfoRow from './AliquotInfoRow';
import { GET_ALIQUOT_BY_SPECIMEN_ID } from '../../Data/SpecimenQueryData';

class AliquotInfoPane extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    return (
      <Table celled>
        <AliquotTableHeader />
        {this.props.data.allAliquot.map((aliquot) => {
            return <AliquotInfoRow aliquot={aliquot} />;
        })}
      </Table>
    );
  }
}

AliquotInfoPane.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    data: PropTypes.object,
    allAliquots: PropTypes.object,
  }).isRequired,
};

const AliquotInfoPaneWithData = graphql(GET_ALIQUOT_BY_SPECIMEN_ID, {
  options: props => ({
    variables: {
      specimenid: (props.specimenid),
    },
  }),
})(AliquotInfoPane);


export default AliquotInfoPaneWithData;
