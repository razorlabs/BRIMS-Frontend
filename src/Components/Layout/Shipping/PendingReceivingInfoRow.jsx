import { Table } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

class PendingReceivingInfoRow extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>
          {this.props.receive.item}
        </Table.Cell>
        <Table.Cell>
          {this.props.receive.type}
        </Table.Cell>
        <Table.Cell>
          {this.props.receive.shipfrom}
        </Table.Cell>
        <Table.Cell>
          {this.props.receive.shipto}
        </Table.Cell>
        <Table.Cell>
          {this.props.receive.senddate}
        </Table.Cell>
        <Table.Cell>
          {this.props.receive.recipient}
        </Table.Cell>
        <Table.Cell>
          {this.props.receive.notes}
        </Table.Cell>
        <Table.Cell>
          {this.props.receive.received}
        </Table.Cell>
      </Table.Row>
    );
  }
}

PendingReceivingInfoRow.propTypes = {
  receive: PropTypes.shape({
    item: PropTypes.string,
    type: PropTypes.string,
    shipfrom: PropTypes.string,
    shipto: PropTypes.string,
    senddate: PropTypes.string,
    recipient: PropTypes.string,
    notes: PropTypes.string,
    received: PropTypes.bool,
  }).isRequired,
};

export default PendingReceivingInfoRow;
