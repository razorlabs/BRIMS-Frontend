import { Dropdown, Modal, Form, Button } from 'semantic-ui-react';
import React from 'react';

import { graphql, compose } from 'react-apollo';
import { ADD_PATIENT } from '../../Data/PatientMutation';
import { GET_ALL_PATIENTS } from '../../Data/PatientQueryData';
import { GET_ALL_SCHEDULE } from '../../Data/ScheduleQuery';

class AddPatientModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: '',
      externalid: '',
      draw: '',
      modalOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value });
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = () => {
    this.props.mutate({
      variables: {
        pid: this.state.pid,
        externalId: this.state.externalid,
        drawschedule: this.state.draw,
      },
    });
    this.handleClose();
  }

  render() {
    let drawlist;
    /* TODO error out if pid/external id already exists suggest merge */
    if (this.props.scheduleloading) {
      drawlist = 'Loading...';
    } else {
      drawlist = this.props.allschedule.map(x => ({ key: x.name, value: x.id, text: x.name }));
    }
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} >Add Patient</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add Patient</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>PID</label>
              <Form.Input placeholder="PID" name="pid" value={this.state.pid} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>External ID</label>
              <Form.Input placeholder="External ID" name="externalid" value={this.state.externalid} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Draw Schedule</label>
              <Dropdown
                name="draw"
                placeholder="Draw Schedule"
                selection
                search
                options={drawlist}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Button floated="right" content="Submit" />
            <Form.Field />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const ScheduleData = graphql(GET_ALL_SCHEDULE, {
  props: ({ data }) => ({
    scheduleerror: data.error,
    scheduleloading: data.loading,
    allschedule: data.allSchedules,
  }),
});

const AddPatient = graphql(ADD_PATIENT, {
  options: props => ({
    refetchQueries: () => [{ query: GET_ALL_PATIENTS }],
  }),
});

const AddPatientModalMutation = compose(AddPatient, ScheduleData)(AddPatientModal);

export default AddPatientModalMutation;
