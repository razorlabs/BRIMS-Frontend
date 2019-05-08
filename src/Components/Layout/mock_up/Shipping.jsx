import { Checkbox, Button, Container, Menu, Label, Segment, Tab, Table } from 'semantic-ui-react';
import React from 'react';
import PageMenu from '../PageMenu';

class PendingShipment extends React.Component {
  render() {
    return (
      <Tab.Pane>
        <Table>
          <Table.Row>
            <Table.PageMenuCell>PID</Table.PageMenuCell>
            <Table.PageMenuCell>Type</Table.PageMenuCell>
            <Table.PageMenuCell>Aliquot ID</Table.PageMenuCell>
            <Table.PageMenuCell>Specimen ID</Table.PageMenuCell>
            <Table.PageMenuCell>Ship From</Table.PageMenuCell>
            <Table.PageMenuCell>Ship To</Table.PageMenuCell>
            <Table.PageMenuCell>Send Date</Table.PageMenuCell>
            <Table.PageMenuCell>Recipient</Table.PageMenuCell>
            <Table.PageMenuCell>Notes</Table.PageMenuCell>
          </Table.Row>
          <Table.Body>
            <Table.Row>
              <Table.Cell>224-4fb</Table.Cell>
              <Table.Cell>Blood Plasma</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>31</Table.Cell>
              <Table.Cell>AVRC</Table.Cell>
              <Table.Cell>Moon</Table.Cell>
              <Table.Cell>2018-02-06</Table.Cell>
              <Table.Cell>Buzz Aldrin</Table.Cell>
              <Table.Cell>Radioactive handle with care</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>223-4fb</Table.Cell>
              <Table.Cell>Blood Plasma</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>AVRC</Table.Cell>
              <Table.Cell>Moon</Table.Cell>
              <Table.Cell>2018-02-06</Table.Cell>
              <Table.Cell>Buzz Aldrin</Table.Cell>
              <Table.Cell>Radioactive handle with care</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>
        <Button> Create Manifest </Button>
      </Tab.Pane>
    );
  }
}

class PendingRecieving extends React.Component {
  render() {
    return (
      <Tab.Pane>
        <Table>
          <Table.Row>
            <Table.PageMenuCell>Item</Table.PageMenuCell>
            <Table.PageMenuCell>Type</Table.PageMenuCell>
            <Table.PageMenuCell>Ship From</Table.PageMenuCell>
            <Table.PageMenuCell>Ship To</Table.PageMenuCell>
            <Table.PageMenuCell>Send Date</Table.PageMenuCell>
            <Table.PageMenuCell>Recipient</Table.PageMenuCell>
            <Table.PageMenuCell>Notes</Table.PageMenuCell>
            <Table.PageMenuCell>Received?</Table.PageMenuCell>
          </Table.Row>
          <Table.Body>
            <Table.Row>
              <Table.Cell>225-442</Table.Cell>
              <Table.Cell>Blood Plasma</Table.Cell>
              <Table.Cell>Moon</Table.Cell>
              <Table.Cell>AVRC</Table.Cell>
              <Table.Cell>2018-02-06</Table.Cell>
              <Table.Cell>Rebecca</Table.Cell>
              <Table.Cell>Do not shake</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>228-43b</Table.Cell>
              <Table.Cell>Blood Plasma</Table.Cell>
              <Table.Cell>Moon</Table.Cell>
              <Table.Cell>AVRC</Table.Cell>
              <Table.Cell>2018-02-06</Table.Cell>
              <Table.Cell>Deedee</Table.Cell>
              <Table.Cell>Do not shake</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>228-43b</Table.Cell>
              <Table.Cell>Blood Plasma</Table.Cell>
              <Table.Cell>Moon</Table.Cell>
              <Table.Cell>AVRC</Table.Cell>
              <Table.Cell>2018-02-06</Table.Cell>
              <Table.Cell>Deedee</Table.Cell>
              <Table.Cell>Do not shake</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>
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
        menuItem: <Menu.Item key="Pending_Recieving">Pending Recieving<Label circular color="blue" >3</Label></Menu.Item>,
        render: () => <PendingRecieving />,
      },
      {
        menuItem: <Menu.Item key="Shipping_History">Shipping History</Menu.Item>,
        render: () => <Tab.Pane>Shipping History</Tab.Pane>,
      },
    ];

    return (
      <div>
        <PageMenu />
        <Container>
          <Segment.Group>
            <Segment vertical clearing="true">
              <Button padded floated="right"> Manage Locations </Button>
            </Segment>
            <Segment.Group>
              <Tab panes={panes} />
            </Segment.Group>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}
