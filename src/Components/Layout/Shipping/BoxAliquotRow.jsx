import React from 'react';
import { Checkbox, Table } from 'semantic-ui-react';

class BoxAliquotRow extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>
          {this.props.aliquot.specimen.patientid}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.id}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.type}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.volume}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.boxslotmodel.rowPosition}
        </Table.Cell>
        <Table.Cell>
          {this.props.aliquot.boxslotmodel.columnPosition}
        </Table.Cell>
        <Table.Cell>
          <Checkbox />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default BoxAliquotRow;
