import { Tab, Table, Container, Dimmer, Loader } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import React from 'react';
import { GET_PENDING_SHIPMENTS, GET_PENDING_RECEIVING } from '../../Data/ShippingQueryData';
import Header from '../Header';
import PendingReceivingWithData from '../../Route/PendingReceivingWithData';
import PendingShippingWithData from '../../Route/PendingShippingWithData';


class ShippingCombined extends React.Component {
  render() {
    const panes = [
      {
        menuItem: 'Pending Shipment',
        render: () => <Tab.Pane> <PendingShippingWithData /> </Tab.Pane>,
      },
      {
        menuItem: 'Pending Receiving',
        render: () => <Tab.Pane> <PendingReceivingWithData /> </Tab.Pane>,
      },
    ];
    return (
      <div>
        <Header />
        <Container>
          <Tab panes={panes} />
        </Container>
      </div>
    );
  }
}

const Shipping = ShippingCombined;

export default Shipping;
