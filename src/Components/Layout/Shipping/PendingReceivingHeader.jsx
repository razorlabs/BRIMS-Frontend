import { Table } from 'semantic-ui-react';
import React from 'react';

const PendingReceivingHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Item</Table.HeaderCell>
      <Table.HeaderCell>Type</Table.HeaderCell>
      <Table.HeaderCell>Ship From</Table.HeaderCell>
      <Table.HeaderCell>Ship To</Table.HeaderCell>
      <Table.HeaderCell>Send Date</Table.HeaderCell>
      <Table.HeaderCell>Recipient</Table.HeaderCell>
      <Table.HeaderCell>Notes</Table.HeaderCell>
      <Table.HeaderCell>Received?</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default PendingReceivingHeader;
