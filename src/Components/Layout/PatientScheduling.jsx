import { Label, Table, Button, Container } from 'semantic-ui-react';
import React from 'react';
import PageMenu from './PageMenu';

const VisitSpecimenTable = () => (
  <Table celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>
          Week 0
        </Table.HeaderCell>
        <Table.HeaderCell>
          Week 2
        </Table.HeaderCell>
        <Table.HeaderCell>
          Week 4
        </Table.HeaderCell>
        <Table.HeaderCell>
          Week 8
        </Table.HeaderCell>
        <Table.HeaderCell>
          Week 16
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Specimen</Table.Cell>
        <Table.Cell>
          <Label as="a" horizontal>Dry Blood Spot</Label>
          <Label as="a" horizontal>Blood</Label>
          <Label as="a" horizontal>Urine</Label>
        </Table.Cell>
        <Table.Cell>
          <Label as="a" horizontal>Swab</Label>
        </Table.Cell>
        <Table.Cell>
          <Label as="a" horizontal>Blood</Label>
        </Table.Cell>
        <Table.Cell>
          <Label as="a" horizontal>Blood</Label>
        </Table.Cell>
        <Table.Cell>
          <Label as="a" horizontal>Plasma</Label>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default class PatientScheduling extends React.Component {
  render() {
    return (
      <div>
        <PageMenu />
        <Container>
          <Button>Add Visit</Button>
          <Button>Add Specimen Draw</Button>
          <VisitSpecimenTable />
        </Container>
      </div>
    );
  }
}

