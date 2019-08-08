import { Table } from 'semantic-ui-react';
import React from 'react';

/* Header values for the specimen table */
const SpecimenTableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Collect Date</Table.HeaderCell>
      <Table.HeaderCell>Collect Time</Table.HeaderCell>
      <Table.HeaderCell># of Tubes</Table.HeaderCell>
      <Table.HeaderCell>Volume</Table.HeaderCell>
      <Table.HeaderCell>Storage</Table.HeaderCell>
      <Table.HeaderCell>Available to Aliquot</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default SpecimenTableHeader;
