import { Dropdown, Modal, Form, Button } from 'semantic-ui-react';
import React from 'react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';

import gql from 'graphql-tag';
import moment from 'moment';
import { graphql, compose } from 'react-apollo';
import { ADD_SPECIMEN } from '../../Data/SpecimenMutations';
import { GET_SPECIMEN_TYPES, GET_SPECIMEN_BY_PATIENT_ID } from '../../Data/SpecimenQueryData';
/*
  The Add Specimen Modal inherents the target patient via a props pass and
  composes two graphql calls, one for querying types of specimen as part of
  the type requirement, and the second carrying the mutation call for db
  commit of new specimen on the target patient.
*/

class AddSpecimenModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      volume: '',
      date: '',
      time: '',
      notes: '',
      modalOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value })
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = () => {
    this.props.mutate({
      variables: {
        patient: this.props.patientid,
        specimentype: this.state.type,
        volume: this.state.volume,
        collectDate: moment(this.state.date, 'YYYY-MMM-DD').format('YYYY-MM-DD'),
        collectTime: this.state.time,
        notes: this.state.notes,
      },
    });
    this.handleClose();
  }

  render() {
    /*
      create list of objects displaying options for specimen from
      GET_SPECIMEN_TYPES query
    */
    let listdict;
    if (this.props.loading) {
      listdict = 'Loading...';
    } else {
      listdict = this.props.alltypes.map(x => ({ key: x.type, value: x.id, text: x.type }));
    }
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} floated="right">Add Specimen</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add Specimen</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Specimen Type</label>
              <Dropdown
                name="type"
                placeholder="Specimen Type"
                selection
                search
                options={listdict}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Volume</label>
              <Form.Input placeholder="Volume" name="volume" value={this.state.volume} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Collect Date</label>
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
            </Form.Field>
            <Form.Field>
              <label>Collect Time</label>
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
            </Form.Field>
            <Form.Field>
              <label>Notes</label>
              <Form.Input placeholder="Notes" name="notes" value={this.state.notes} onChange={this.handleChange} />
            </Form.Field>
            <Form.Button floated="right" content="Submit" />
            <Form.Field />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const SpecimenPickerData = graphql(GET_SPECIMEN_TYPES, {
  props: ({ data }) => ({
    error: data.error,
    loading: data.loading,
    alltypes: data.allSpecimenTypes,
  }),
});

const AddSpecimen = graphql(ADD_SPECIMEN, {
  options: props => ({
    variables: {
      patient: props.patientid,
    },
    refetchQueries: () => [{ query: GET_SPECIMEN_BY_PATIENT_ID, variables: { patientid: props.patientid } }],
  }),
});

const AddSpecimenModalMutation = compose(AddSpecimen, SpecimenPickerData)(AddSpecimenModal);

export default AddSpecimenModalMutation;
