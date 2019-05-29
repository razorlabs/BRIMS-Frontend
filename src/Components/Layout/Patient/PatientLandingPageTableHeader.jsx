import { Table } from 'semantic-ui-react';
import React from 'react';

/*
  Header values for the patient table for patient landing page

  See backend model for all_patients (allPatients) for reference

  While we could map over the values coming from graphql
    1) Unwanted objects sneak in that are useful but not as table headers
    2) It is currently overengineering and otherwise opaque
    (table headers would be edited in schema)

  If there are a large number of table changes that happen in the future then
  mapping over the values to create the header should be revisited

  Similiar to SpecimenLandingPageHeader
*/

const PatientTableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>ID</Table.HeaderCell>
      <Table.HeaderCell>PID</Table.HeaderCell>
      <Table.HeaderCell>External ID</Table.HeaderCell>
      <Table.HeaderCell>Synced</Table.HeaderCell>
      <Table.HeaderCell>SyncDate</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default PatientTableHeader;
