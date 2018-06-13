import { Segment, Label, Container, List, Icon } from 'semantic-ui-react';
import React from 'react';
import Header from './Header';

export default class ActionItems extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Segment>
            <Label size="large" attached="top left">Specimen</Label>
            <Segment>
              <Label attached="top left">Pending Draw</Label>
              <List>
                <List.Content>
                  Patient: 222-442 Draw: Blood, Dry Blood Spot
                  <Icon color="blue" /*link="/specimen"*/ name="external square" />
                </List.Content>
              </List>
            </Segment>
            <Segment>
              <Label attached="top left">Pending Storage</Label>
              <List>
                <List.Content>
                  SSID: 4 Type: Dry Blood Spot
                  <Icon color="blue" name="external square" />
                </List.Content>
              </List>
            </Segment>
            <Segment>
              <Label attached="top left">Pending Aliquot</Label>
              <List>
                <List.Content>
                  SSID: 3 Patient: 223-444 DBS
                  <Icon color="blue" name="external square" />
                </List.Content>
              </List>
            </Segment>
          </Segment>
          <Segment>
            <Label size="large" attached="top left">Shipping</Label>
            <Segment>
              <Label attached="top left">Pending Shipping</Label>
              <List>
                <List.Content>
                  SSID: 24
                  <Icon color="blue" name="external square" />
                </List.Content>
                <List.Content>
                  SSID: 25
                  <Icon color="blue" name="external square" />
                </List.Content>
              </List>
            </Segment>
            <Segment>
              <Label attached="top left">Pending Receiving</Label>
              <List>
                <List.Content>
                  Location: UCD Aliquot Center Date: 2017-04-23
                  <Icon color="blue" name="external square" />
                </List.Content>
              </List>
            </Segment>
          </Segment>

        </Container>
      </div>
    );
  }
}

