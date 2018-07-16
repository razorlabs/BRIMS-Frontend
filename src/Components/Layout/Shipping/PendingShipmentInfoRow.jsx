import { Table } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

class PendingShipmentInfoRow extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>
          {this.props.shipping.pid}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.type}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.aliquotid}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.specimenid}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.shipfrom}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.shipto}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.senddate}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.recipient}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.notes}
        </Table.Cell>
      </Table.Row>
    );
  }
}

PendingShipmentInfoRow.propTypes = {
  shipping: PropTypes.shape({
    pid: PropTypes.string,
    type: PropTypes.string,
    aliquotid: PropTypes.string,
    specimenid: PropTypes.string,
    shipfrom: PropTypes.string,
    shipto: PropTypes.string,
    senddate: PropTypes.string,
    recipient: PropTypes.string,
    notes: PropTypes.string,
  }).isRequired,
};

export default PendingShipmentInfoRow;
