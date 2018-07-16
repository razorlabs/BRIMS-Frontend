import { Tab, Container } from 'semantic-ui-react';
import React from 'react';
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
