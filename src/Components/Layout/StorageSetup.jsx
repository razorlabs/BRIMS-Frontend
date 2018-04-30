import { Table, Button, Segment, Container, List, Icon } from 'semantic-ui-react';
import React from 'react';
import Header from './Header';


class BoxGrid extends React.Component {
  // Cells are intentionally left un-selfclosing for rapid-demo
  render() {
    return (
      <Table textAlign="center" fixed celled striped definition size="small">
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell> A </Table.HeaderCell>
            <Table.HeaderCell> B </Table.HeaderCell>
            <Table.HeaderCell> C </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>222-22a BldSpt</Table.Cell>
            <Table.Cell>222-22b</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>223-abc</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>222-bca</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default class StorageSetup extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Segment vertical clearing>
          <Button> Manage Storage </Button>
        </Segment>
        <Container>
          <Segment>
            <List divided>
              <List.Item>
                <List.Icon name="snowflake outline" />
                <List.Content>
                  <List.Header>Fridge 001 </List.Header>
                  <List.Description>TSX Series AB31</List.Description>
                  <List.List>
                    <List.Item>
                      <Segment>
                        <List.Content>
                          <List.Header><List.Icon name="dropbox" /> Box CCTG_001 </List.Header>
                          <List.Description>Dry Blood Spot Storage Box </List.Description>
                          <List.Item>
                            <BoxGrid />
                          </List.Item>
                        </List.Content>
                      </Segment>
                    </List.Item>
                    <List.Item>
                      <Segment>
                        <List.Content>
                          <List.Header><List.Icon name="dropbox" /> Box CCTG_002 </List.Header>
                          <List.Description>Dry Blood Spot Storage Box </List.Description>
                          <List.Item>
                            <BoxGrid />
                          </List.Item>
                        </List.Content>
                      </Segment>
                    </List.Item>
                  </List.List>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Container>
      </div>
    );
  }
}

