import React from 'react';
import { Checkbox, Dropdown, Input, Form, Button, Table, Modal } from 'semantic-ui-react';

const BuildBox = (props) => {
  const returnBox = [];
  const cellsCount = [];
  let lengthHeader = [];
  let heightHeader = [];
  const tablelengthHeader = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  if (props.heightlabel === 'numeric') {
    for (let j = 0; j < props.height; j += 1) {
      heightHeader.push(j + 1);
    }
  }

  if (props.heightlabel === 'alphabetic') {
    for (let j = 0; j < props.height; j += 1) {
      heightHeader.push(alphabet[j]);
    }
  }

  if (props.heightinverted) {
    heightHeader = heightHeader.reverse();
  }

  if (props.lengthlabel === 'numeric') {
    for (let j = 0; j < props.length; j += 1) {
      lengthHeader.push(j + 1);
    }
  }

  if (props.lengthlabel === 'alphabetic') {
    for (let j = 0; j < props.length; j += 1) {
      lengthHeader.push(alphabet[j]);
    }
  }

  if (props.lengthinverted) {
    lengthHeader = lengthHeader.reverse();
  }

  tablelengthHeader.push(<Table.HeaderCell />);
  for (let j = 0; j < props.length; j += 1) {
    tablelengthHeader.push(<Table.HeaderCell celled>{lengthHeader[j]}</Table.HeaderCell>);
    cellsCount.push(<Table.Cell />);
  }

  for (let i = 0; i < props.height; i += 1) {
    returnBox.push(<Table.Row><Table.Cell>{heightHeader[i]}</Table.Cell>{cellsCount}</Table.Row>);
  }

  return (
    <div>
      <Table collapsing celled striped definition>
        <Table.Footer><Table.Row>{tablelengthHeader}</Table.Row></Table.Footer>
        <Table.Body>
          {returnBox}
        </Table.Body>
      </Table>
    </div>
  );
};

class BoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxname: '',
      description: '',
      length: '1',
      height: '1',
      lengthlabel: '',
      heightlabel: '',
      lengthinverted: false,
      heightinverted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLengthInvert = this.handleLengthInvert.bind(this);
    this.handleHeightInvert = this.handleHeightInvert.bind(this);
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value })

  handleLengthInvert(event) {
    this.setState(prevState => ({
      lengthinverted: !prevState.lengthinverted,
    }));
  }

  handleHeightInvert(event) {
    this.setState(prevState => ({
      heightinverted: !prevState.heightinverted,
    }));
  }

  handleSubmit(event) {
    alert('lengthlabel ' + this.state.heightinverted + ' ' + this.state.heightlabel);
    event.preventDefault();
  }

  render() {
    const labelOptions = [
      {
        text: 'a-z',
        value: 'alphabetic',
      },
      {
        text: 'Numbered',
        value: 'numeric',
      },
    ];

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            Name
            <Input
              id="boxname"
              type="text"
              value={this.state.boxname}
              onChange={this.handleChange}
              name="boxname"
              placeholder="Box Name"
            />
          </Form.Field>
          <Form.Field>
            Description
            <Input
              id="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              placeholder="Box Description"
            />
          </Form.Field>
          <Form.Group heights="equal">
            <Form.Field>
              Box Length
              <Input
                id="boxlength"
                type="number"
                min="1"
                max="50"
                value={this.state.length}
                onChange={this.handleChange}
                name="length"
                placeholder="Box Length"
              />
            </Form.Field>
            <Form.Field>
              Box Height
              <Input
                id="boxheight"
                type="number"
                min="1"
                max="50"
                value={this.state.height}
                onChange={this.handleChange}
                name="height"
                placeholder="Box height"
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              Length Label
              <Dropdown
                compact
                selection
                name="lengthlabel"
                options={labelOptions}
                onChange={this.handleChange}
              />
              <Checkbox
                name="lengthinverted"
                checked={this.state.lengthinverted}
                onClick={this.handleLengthInvert}
                label="Inverted"
              />
            </Form.Field>
            <Form.Field>
              Height Label
              <Dropdown
                compact
                selection
                name="heightlabel"
                options={labelOptions}
                defaultValue="alphabetic"
                onChange={this.handleChange}
              />
              <Checkbox
                name="heightinverted"
                checked={this.state.heightinverted}
                onChange={this.handleHeightInvert}
                label="Inverted"
              />
            </Form.Field>
          </Form.Group>

          Box Preview
          <br />
          <BuildBox
            length={this.state.length}
            height={this.state.height}
            lengthlabel={this.state.lengthlabel}
            heightlabel={this.state.heightlabel}
            lengthinverted={this.state.lengthinverted}
            heightinverted={this.state.heightinverted}
          />
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

const AddBoxModal = () => (
  <Modal trigger={<Button color="blue">Add Box Type</Button>}>
    <Modal.Header>Add Box</Modal.Header>
    <Modal.Content>
      <BoxForm />
    </Modal.Content>
  </Modal>
);


class BoxSetup extends React.Component {
  render() {
    return (
      <AddBoxModal />
    );
  }
}

export default BoxSetup;
