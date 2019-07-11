import { Tab, Table, Dimmer, Loader } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import React from 'react';
import PendingShipmentHeader from './PendingShipmentHeader';
import PendingShipmentInfoRow from './PendingShipmentInfoRow';
import { GET_PENDING_SHIPMENTS } from '../../Data/ShippingQueryData';

class PendingShipment extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    return (
      <Tab.Pane>
        <Table padded celled>
          <PendingShipmentHeader />
          {this.props.data.allPendingshipments.map((shipping) => {
            return <PendingShipmentInfoRow shipping={shipping} key={shipping.id} />;
          })}
        </Table>
      </Tab.Pane>
    );
  }
}

const PendingShippingWithData = graphql(GET_PENDING_SHIPMENTS)(PendingShipment);

export default PendingShippingWithData;
