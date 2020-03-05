import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Checkbox, Container, Header, Modal, Table, Button, Segment, Loader, Dimmer } from 'semantic-ui-react';
import BoxAliquotRow from './BoxAliquotRow';

const BoxAliquotTableHeader = () => (
  <Table.Header>
    <Table.HeaderCell>Patient ID</Table.HeaderCell>
    <Table.HeaderCell>Aliquot ID</Table.HeaderCell>
    <Table.HeaderCell>Type</Table.HeaderCell>
    <Table.HeaderCell>Volume</Table.HeaderCell>
    <Table.HeaderCell>Row</Table.HeaderCell>
    <Table.HeaderCell>Column</Table.HeaderCell>
    <Table.HeaderCell>Remove?</Table.HeaderCell>
  </Table.Header>
);

class BoxContents extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <Segment.Group>
          <Segment>
            <p><b>Box ID:</b> {this.props.contents.key} </p>
            <p><b>Name:</b> {this.props.contents.name} </p>
          <Segment>
            <Table attached celled>
              <BoxAliquotTableHeader />
              <Table.Body>
                {/* x in this instance to represent aliquot and avoid collision */}
                {this.props.contents.aliquot.map( x => (<BoxAliquotRow aliquot={x} />))}
              </Table.Body>
            </Table>
          </Segment>
          </Segment>
        </Segment.Group>
        </Container>
      </div>
    );
  }
}


export default BoxContents;
