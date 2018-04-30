import { Grid, Segment, Label, Container, Icon, Tab, Table, Button, List, Modal, MountNode, Divider } from 'semantic-ui-react';
import React from 'react';
import Header from './Header';
import SpecimenModal from './SpecimenModal';

const SpecimenInfoTable = () => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Collect Date</Table.HeaderCell>
        <Table.HeaderCell>Collect Time</Table.HeaderCell>
        <Table.HeaderCell># of Tubes</Table.HeaderCell>
        <Table.HeaderCell>Storage</Table.HeaderCell>
        <Table.HeaderCell>Available to Aliquot <Icon color="blue" name="plus circle" link="/" /></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>2018-04-26</Table.Cell>
        <Table.Cell>22:34</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell><Button size="large" icon="dropbox" /></Table.Cell>
        <Table.Cell>3/4</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

const specimenTypes = [
  { key: 'ACD', text: 'ACD', value: 'ACD' },
  { key: 'CVF', text: 'Aspirator for CVF', value: 'CVF' },
  { key: 'Blood for Plasma', text: 'Blood for Plasma', value: 'BLDPSM' },
  { key: 'DBS', text: 'Dried Blood Spot', value: 'DBS' },
];

export default class Specimen extends React.Component {
  // The Specimen view needs a locked-visual indicator with aliquot to denote the association
  // (tabs for this example)
  render() {
    const TableSegment = () => {
      return (
        <div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Aliquot ID</Table.HeaderCell>
                <Table.HeaderCell>Visit</Table.HeaderCell>
                <Table.HeaderCell>Collect Time</Table.HeaderCell>
                <Table.HeaderCell>Storage</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Print Labels</Table.HeaderCell>
                <Table.HeaderCell>Ship</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  1
                </Table.Cell>
                <Table.Cell>
                  Week 4
                </Table.Cell>
                <Table.Cell>
                  2018-04-04 22:04
                </Table.Cell>
                <Table.Cell textAlign="center">
                  <Button size="large" icon="dropbox" />
                </Table.Cell>
                <Table.Cell>
                  This is an example of an aliquot from a base specimen
                </Table.Cell>
                <Table.Cell>
                  <Button size="large" icon="print" />
                </Table.Cell>
                <Table.Cell>
                  <Button size="large" icon="shipping" />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      );
    };

    const panes = [
      {
        menuItem: 'Dried Blood Spot ID: 4',
        render: () => <Tab.Pane><SpecimenInfoTable /><TableSegment /></Tab.Pane>
      },
      {
        menuItem: 'Swab ID: 5',
        render: () => <Tab.Pane><SpecimenInfoTable /><TableSegment /></Tab.Pane>
      },
      {
        menuItem: 'Swab ID: 9',
        render: () => <Tab.Pane><SpecimenInfoTable /><TableSegment /></Tab.Pane>
      },
    ];

    return (
      <div>
        <Header />
        <Container>
          <Segment padded>
            <Label size="large" attached="top left">Patient Info Pane</Label>
            <Container>
              <Segment.Group horizontal>
                <Segment>
                  <List>
                    <List.Item>
                      <List.Icon name="address card" />
                      <List.Content>SSID: 1</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="address book" />
                      <List.Content>PID: 222-222</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="address book outline" />
                      <List.Content>External ID: vid-g2-4444</List.Content>
                    </List.Item>
                  </List>
                </Segment>
                <Segment >
                  <List>
                    <List.Item>
                      <List.Icon name="exclamation" />
                      <List.Content>Next draw: Week 8</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="eyedropper" />
                      <List.Content>Blood <Icon color="blue" name="plus circle" link="/" /> </List.Content>
                      <List.Icon name="eyedropper" />
                      <List.Content>Urine <Icon color="blue" name="plus circle" link="/" /> </List.Content>
                    </List.Item>
                  </List>
                </Segment>
              </Segment.Group>
            </Container>
          </Segment>
          <Segment.Group>
            <Segment padded>
                <Label size="large" attached="top left">Specimen</Label>
                <SpecimenModal />
                <Tab panes={panes} />
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}
