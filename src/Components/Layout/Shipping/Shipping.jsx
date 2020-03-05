import { Table, Dimmer, Loader, Container } from 'semantic-ui-react';
import React from 'react';
import { graphql } from 'react-apollo';
import PageMenu from '../PageMenu';
import ShippingInfoRow from './ShippingInfoRow';
import { GET_SHIPMENTS } from '../../Data/ShippingQueryData';


const ShipmentHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>ID</Table.HeaderCell>
      <Table.HeaderCell>Manifest</Table.HeaderCell>
      <Table.HeaderCell>Carrier</Table.HeaderCell>
      <Table.HeaderCell>Shipment Number</Table.HeaderCell>
      <Table.HeaderCell>Destination</Table.HeaderCell>
      <Table.HeaderCell>Sent Date</Table.HeaderCell>
      <Table.HeaderCell>Received Date</Table.HeaderCell>
      <Table.HeaderCell>Ship Now</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);


class ShippingUI extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    console.log(this.props.data.allShipments);
    return (
      <div>
          <PageMenu />
          <Container>
            <Table padded celled>
              <ShipmentHeader />
              {this.props.data.allShipments.map((shipping) => {
                return <ShippingInfoRow shipping={shipping} key={shipping.id} />
              })}
            </Table>
          </Container>
      </div>
    );
  }
}

/*
          {this.props.data.allShipments.map((shipping) => {
            return <PendingShipmentInfoRow shipping={shipping} key={shipping.id} />;
          })}
*/

const Shipping = graphql(GET_SHIPMENTS)(ShippingUI)

export default Shipping;
