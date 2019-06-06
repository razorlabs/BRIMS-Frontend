import { Modal, Form, Button, Segment, Label, Container, Tab, Table, Loader, Dimmer } from 'semantic-ui-react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';
import PropTypes from 'prop-types';
import React from 'react';
import SpecimenTableHeader from './SpecimenTableHeader';
import SpecimenInfoRow from './SpecimenInfoRow';
import AliquotInfoPaneWithData from '../../Route/AliquotInfoPaneWithData';


/* A helper function to build the semantic-ui Tab panes
   see https://react.semantic-ui.com/modules/tab#types-basic

   In the future there will need to be an adjustment to display
   panes differently when the number of specimen exceeds a certain
   amount making the display lengthy and cumbersome to navigate
*/

class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <Form>
        <DateInput
          name="date"
          clearable
          closable
          placeholder="Date"
          value={this.state.date}
          iconPosition="right"
          onChange={this.handleChange}
          dateFormat="YYYY-MMM-DD"
        />
      </Form>
    );
  }
}

class TimePickerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <Form>
        <TimeInput
          clearable
          closable
          name="time"
          placeholder="Time"
          value={this.state.time}
          iconPosition="right"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

const AddSpecimenModal = () => (
  <Modal trigger={<Button floated="right">Add Specimen</Button>}>
    <Modal.Header>Add Specimen</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Field>
          <label>Type</label>
          <input placeholder="Type" />
        </Form.Field>
        <Form.Field>
          <label>Volume</label>
          <input placeholder="Type" />
        </Form.Field>
        <Form.Field>
          <label>Collect Date</label>
          <DatePickerInput />
        </Form.Field>
        <Form.Field>
          <label>Collect Time</label>
          <TimePickerInput />
        </Form.Field>
        <Form.Field>
          <label>Notes</label>
          <input placeholder="Type" />
        </Form.Field>
      </Form>
    </Modal.Content>
  </Modal>
);


function BuildPanes(type, id, specimen) {
  const item = type.concat(' ID:', id);
  const pane = {
    menuItem: item,
    render: () => (
      <Tab.Pane>
        <Segment>
          <Table celled>
            <SpecimenTableHeader />
            <SpecimenInfoRow specimen={specimen} key={specimen.id} />
          </Table>
        </Segment>
        <Segment>
          <AliquotInfoPaneWithData specimenid={specimen.id} />
        </Segment>
      </Tab.Pane>
    ),
  };
  return pane;
}

class SpecimenInfoPane extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    const buildpanes = this.props.data.allSpecimen.map((specimen) => {
      return BuildPanes(specimen.type, specimen.id, specimen);
    });
    const panes = [];
    for (let i = 0; i < buildpanes.length; i += 1) {
      panes.push(buildpanes[i]);
    }
    return (
      <Container>
        <Segment.Group>
          <Segment padded>
            <Label size="large" attached="top left">Specimen</Label>
            <Table celled>
              <Tab panes={panes} />
            </Table>
            <AddSpecimenModal />
            <br />
            <br />
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

SpecimenInfoPane.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
  }).isRequired,
};

export default SpecimenInfoPane;
