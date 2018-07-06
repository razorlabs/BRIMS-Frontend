import { Table, Loader, Dimmer } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import AliquotTableHeader from './AliquotTableHeader';
import AliquotInfoRow from './AliquotInfoRow';

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
        {this.props.data.allAliquots.map((aliquot) => {
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

export default AliquotInfoPane;
