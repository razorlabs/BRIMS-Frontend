import { Table } from 'semantic-ui-react';
import React from 'react';

class AliquotTableHeader extends React.Component {
  render() {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Aliquot ID</Table.HeaderCell>
          <Table.HeaderCell>Visit</Table.HeaderCell>
          <Table.HeaderCell>Collect Date</Table.HeaderCell>
          <Table.HeaderCell>Collect Time</Table.HeaderCell>
          <Table.HeaderCell>Volume</Table.HeaderCell>
          <Table.HeaderCell>Storage</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
          <Table.HeaderCell>Print Labels</Table.HeaderCell>
          <Table.HeaderCell>Ship</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }
}

export default AliquotTableHeader;
