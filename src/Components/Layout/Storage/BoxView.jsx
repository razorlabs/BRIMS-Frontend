import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Header, Modal, Table, Button, Segment, Loader, Dimmer } from 'semantic-ui-react';

export const GET_BOX_CONTENT = gql`
    query($boxid: Int!) {
      allSlots(id: $boxid)
    }
`;

export const GET_BOX_TYPE = gql`
    query($boxid: Int!) {
      boxType(id: $boxid){
        id
        length
        height
        lengthLabel
        heightLabel
        lengthInverted
        heightInverted
      }
    }
`;

const BoxEntryModal = (props) => {
  return (
    <Modal trigger={
      <Button circular size="mini"> {props.row} {props.column} </Button>}>
      <Modal.Header> Select an aliquot </Modal.Header>
      <Modal.Content />
    </Modal>
  )
}

const BuildBoxView = (props) => {
  const returnBox = [];
  const cellsCount = [];
  let lengthHeader = [];
  let heightHeader = [];
  const tablelengthHeader = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let j = 0; j < props.height; j += 1) {
    if (props.heightLabel === 'NUMERIC') {
      heightHeader.push(j + 1);
    }
    if (props.heightLabel === 'ALPHABETIC') {
      heightHeader.push(alphabet[j]);
    }
  }

  if (props.heightInverted) {
    heightHeader = heightHeader.reverse();
  }


  tablelengthHeader.push(<Table.HeaderCell />)
  for (let j = 0; j < props.length; j += 1) {
    if (props.lengthLabel === 'NUMERIC') {
      lengthHeader.push(j + 1);
    }
    if (props.lengthlabel === 'ALPHABETIC') {
      lengthHeader.push(alphabet[j]);
    }
  }

  if (props.lengthInverted) {
    lengthHeader = lengthHeader.reverse();
  }

  for (let j = 0; j < props.height; j += 1) {
    let cells = [];
    tablelengthHeader.push(<Table.HeaderCell textAlign="center" width={4} celled>{lengthHeader[j]}</Table.HeaderCell>);
    cellsCount.push(<Table.Cell />);
    for (let i = 0; i < props.length; i += 1) {
      if (props.allslot[heightHeader[j]] !== undefined && props.allslot[heightHeader[j]][lengthHeader[i]] !== undefined) {
        cells.push(<Table.Cell selectable ><a href={props.allslot[heightHeader[j]][lengthHeader[i]]}>{props.allslot[heightHeader[j]][lengthHeader[i]]}</a></Table.Cell>);
      }
      else {
        cells.push(
          <Table.Cell textAlign="center" selectable>
            <BoxEntryModal
              row={heightHeader[j]}
              column={lengthHeader[i]}
            />
          </Table.Cell>);
      }
      if (i === (props.length - 1)) {
        returnBox.push(<Table.Row><Table.Cell textAlign="center">{heightHeader[j]}</Table.Cell>{cells}</Table.Row>);
      }
    }
  }


  return (
    <div>
      <Table collapsing celled striped defintion color="blue">
        <Table.Footer><Table.Row>{tablelengthHeader}</Table.Row></Table.Footer>
        <Table.Body>
          {returnBox}
        </Table.Body>
      </Table>
    </div>
  );
};

class BoxView extends React.Component {
  render() {
    if (this.props.loadingboxtype || this.props.loadingallSlots) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.errorboxtype || this.props.errorallSlots) {
      return <p> Error! </p>;
    }
    const allslotJson = JSON.parse((this.props.allSlots));
    return (
      <div>
        <Segment.Group compact>
          <Segment>
            <Header size="medium">
              Name: {allslotJson.name}
            </Header>
          </Segment>
          <Segment>
            Description: {allslotJson.description}
          </Segment>
          <Segment>
            <BuildBoxView
              length={this.props.length}
              height={this.props.height}
              lengthLabel={this.props.lengthLabel}
              heightLabel={this.props.heightLabel}
              lengthInverted={this.props.lengthInverted}
              heightInverted={this.props.heightInverted}
              allslot={allslotJson}
            />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

const BoxTypeData = graphql(GET_BOX_TYPE, {
  options: props => ({
    variables: {
      boxid: (props.boxid),
    },
  }),
  props: ({ data }) => ({
    errorboxtype: data.error,
    loadingboxtype: data.loading,
    ...data.boxType,
  }),
});

const ContentData = graphql(GET_BOX_CONTENT, {
  options: props => ({
    variables: {
      boxid: (props.boxid),
    },
  }),
  props: ({ data }) => ({
    errorallSlots: data.error,
    loadingallSlots: data.loading,
    allSlots: data.allSlots,
  }),
});

const BoxViewWithData = compose(BoxTypeData, ContentData)(BoxView);

export default BoxViewWithData;
