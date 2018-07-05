import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';

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
        <Table.Cell>
          {this.props.specimen.collectdate}
        </Table.Cell>
        <Table.Cell>
          {this.props.specimen.collecttime}
        </Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>
          {this.props.specimen.volume}
        </Table.Cell>
        <Table.Cell />
        <Table.Cell>TBD</Table.Cell>
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
