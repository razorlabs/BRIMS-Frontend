import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class AliquotInfoRow extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>
          {this.props.aliquot.id}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.visit}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.collectdate}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.collecttime}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.volume}
        </Table.Cell>
        <Table.Cell>
          TBD
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.notes}
        </Table.Cell>
        <Table.Cell>
          TBD
        </Table.Cell>
        <Table.Cell>
          TBD
        </Table.Cell>
      </Table.Row>
    );
  }
}

AliquotInfoRow.propTypes = {
  aliquot: PropTypes.shape({
    id: PropTypes.number,
    visit: PropTypes.string,
    collectdate: PropTypes.string,
    collecttime: PropTypes.string,
    volume: PropTypes.string,
    notes: PropTypes.string,
  }).isRequired,
};

export default AliquotInfoRow;
