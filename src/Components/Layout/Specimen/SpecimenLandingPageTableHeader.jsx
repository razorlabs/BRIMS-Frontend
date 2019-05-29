import { Table } from 'semantic-ui-react';
import React from 'react';

/*
  Header values for the specimen table for specimen landing page

  See backend model for all_specimen (allSpecimen) for reference

  While we could map over the values coming from graphql
    1) Unwanted objects sneak in that are useful but not as table headers
    2) It is currently overengineering and otherwise opaque
    (table headers would be edited in schema)

  If there are a large number of table changes that happen in the future then
  mapping over the values to create the header should be revisited
*/

const SpecimenLandingPageTableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>ID</Table.HeaderCell>
      <Table.HeaderCell>PID</Table.HeaderCell>
      <Table.HeaderCell>Type</Table.HeaderCell>
      <Table.HeaderCell>Collect Date</Table.HeaderCell>
      <Table.HeaderCell>Collect Time</Table.HeaderCell>
      <Table.HeaderCell>Volume</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default SpecimenLandingPageTableHeader;
