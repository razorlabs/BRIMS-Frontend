import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import AddAliquotModalMutation from './AddAliquotModal';

/*
  Displays information regarding specimen in row format
  Still needs to implement # of Tubes on line 20 and
  Available to aliquot line 26

  Line 27 will be expanded to cross reference the storage link
  (once the storage link is available for reference)
*/

class SpecimenInfoRow extends React.Component {
  render() {
    return (
      <Table.Row>
        {/* Collect Date */}
        <Table.Cell>
          { moment(this.props.specimen.collectdate).format('YYYY-MMM-DD') }
        </Table.Cell>
        {/* Collect Time */}
        <Table.Cell>
          {this.props.specimen.collecttime}
        </Table.Cell>
        {/* Number of tubes */}
        <Table.Cell>TBD</Table.Cell>
        {/* Volume */}
        <Table.Cell>
          {this.props.specimen.volume}
        </Table.Cell>
        {/* storage location */}
        <Table.Cell />
        {/* aliquot available */}
        <Table.Cell>10 <AddAliquotModalMutation specimenid={this.props.specimen.id} /></Table.Cell>
      </Table.Row>
    );
  }
}

SpecimenInfoRow.propTypes = {
  specimen: PropTypes.shape({
    collectdate: PropTypes.string,
    collecttime: PropTypes.string,
    volume: PropTypes.string,
  }).isRequired,
};

export default SpecimenInfoRow;
