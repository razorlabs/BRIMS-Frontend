import { Table, Icon } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

class ShippingInfoRow extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>
          {this.props.shipping.id}
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon bordered inverted color='blue' name='clipboard list' />
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.carrier.name}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.shipmentNumber}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.destination.name}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.sentDate}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.receivedDate}
        </Table.Cell>
        <Table.Cell>
          {this.props.shipping.notes}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default ShippingInfoRow;
