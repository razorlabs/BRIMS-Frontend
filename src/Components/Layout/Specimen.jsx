import { Segment, Label, Container, Icon, Tab, Table, Button, List, Modal, MountNode } from 'semantic-ui-react';
import React from 'react';
import Header from './Header';
import SpecimenModal from './SpecimenModal';

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
        pane: <TableSegment />,
      },
      {
        menuItem: 'Swab ID: 5',
      },
      {
        menuItem: 'Swab ID: 9',
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
                      <List.Icon name="calendar outline" />
                      <List.Content>2020-04-22 10 days</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="eyedropper" />
                      <List.Content>Blood <Icon color="blue" name="plus circle" /> </List.Content>
                      <List.Icon name="eyedropper" />
                      <List.Content>Urine <Icon color="blue" name="plus circle" /> </List.Content>
                    </List.Item>
                  </List>
                </Segment>
              </Segment.Group>
            </Container>
          </Segment>
          <Segment.Group>
            <Segment padded>
              <SpecimenModal />
              <Label size="large" attached="top left">Specimen</Label>
              <Tab panes={panes} renderActiveOnly={false} />
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}
