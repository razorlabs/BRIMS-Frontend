import { Button, Container, Menu, Label, Segment, Tab } from 'semantic-ui-react';
import React from 'react';
import Header from './Header';

// This view is going to require more though to be truely user friendly
// The following is a simple conceptual rough draft.


//Pending Shipment Tab
class PendingShipment extends React.Component {
  render() {
    return (
      <Tab.Pane>
        <Segment>
          Pending Shipment
        </Segment>
        <Button> Create Manifest </Button>
      </Tab.Pane>
    );
  }
}


export default class Shipping extends React.Component {

  render() {
    // Content rendered in each tab, can be refactored to callback function
    const panes = [
      {
        menuItem: <Menu.Item key="Pending_Shipment">Pending Shipment<Label circular color="red" >2</Label></Menu.Item>,
        render: () => <PendingShipment />,
      },
      {
        menuItem: <Menu.Item key="Pending_Recieving">Pending Recieving<Label circular color="blue" >8</Label></Menu.Item>,
        render: () => <Tab.Pane>Pending Recieving</Tab.Pane>,
      },
      {
        menuItem: <Menu.Item key="Shipping_History">Shipping History</Menu.Item>,
        render: () => <Tab.Pane>Shipping History</Tab.Pane>,
      },
    ];

    return (
      <div>
        <Header />
        <Segment.Group>
          <Segment vertical clearing="true">
            <Button floated="right"> Manage Locations </Button>
          </Segment>
          <Segment.Group>
            <Tab panes={panes} />
          </Segment.Group>
        </Segment.Group>
      </div>
    );
  }
}
