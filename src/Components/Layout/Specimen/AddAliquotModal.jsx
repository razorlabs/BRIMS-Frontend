import React from 'react';
import { Dropdown, Modal, Form, Icon } from 'semantic-ui-react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';
import moment from 'moment';
import { graphql, compose } from 'react-apollo';
import { ADD_ALIQUOT } from '../../Data/SpecimenMutations';
import { GET_ALIQUOT_TYPES, GET_ALIQUOT_BY_SPECIMEN_ID } from '../../Data/SpecimenQueryData';
import { GET_ALL_VISITS } from '../../Data/ScheduleQuery';

class AddAliquotModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aliquottype: '',
      visit: '',
      volume: '',
      collectdate: '',
      collecttime: '',
      notes: '',
      times: '',
      modalOpen: false,
      inverted: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, { name, value }) => { this.setState({ [name]: value }); }
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = () => {
    this.props.mutate({
      variables: {
        specimenid: this.props.specimenid,
        aliquottype: this.state.aliquottype,
        visit: this.state.visit,
        volume: this.state.volume,
        collectdate: moment(this.state.collectdate, 'YYYY-MMM-DD').format('YYYY-MM-DD'),
        collecttime: this.state.collecttime,
        notes: this.state.notes,
        // how many aliquot to create
        times: this.state.times,
      },
    });
    this.handleClose();
  }

  handleInvert = () => this.setState({ inverted: !this.state.inverted })

 /* TODO handle typedict/visit dict error loading */
  render() {
    let typedict;
    let visitdict;
    if (this.props.aliquotloading) {
      typedict = 'Loading...';
    } else {
      typedict = this.props.alltypes.map(x => ({ key: x.type, value: x.id, text: x.type }));
    }

    if (this.props.visitloading) {
      visitdict = 'Loading...';
    } else {
      visitdict = this.props.allvisits.map(x => ({ key: x.label, value: x.id, text: x.label }));
    }

    return (
      <Modal
        trigger={
          <Icon
            onClick={this.handleOpen}
            onMouseEnter={this.handleInvert}
            onMouseLeave={this.handleInvert}
            color="blue"
            name="plus circle"
            inverted={this.state.inverted}
          />}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add Aliquot</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Aliquot Type</label>
              {/* need to adjust this to only display for optional aliquot types */}
              <Dropdown
                name="aliquottype"
                placeholder="Aliquot Type"
                selection
                search
                options={typedict}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Visit</label>
              <Dropdown
                name="visit"
                placeholder="Visit"
                selection
                search
                options={visitdict}
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
                  name="collectdate"
                  clearable
                  closable
                  placeholder="Date"
                  value={this.state.collectdate}
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
                  name="collecttime"
                  placeholder="Time"
                  value={this.state.collecttime}
                  iconPosition="right"
                  onChange={this.handleChange}
                />
              </Form>
            </Form.Field>
            <Form.Field>
              <label>Notes</label>
              <Form.Input placeholder="Notes" name="notes" value={this.state.notes} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              {/* TODO only allow as base amount of specimen and add all option */}
              <label>Number of Aliquot to Create</label>
              <Form.Input placeholder="Amount" name="times" value={this.state.times} onChange={this.handleChange} />
            </Form.Field>
            <Form.Button floated="right" content="Submit" />
            <Form.Field />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const AliquotPicker = graphql(GET_ALIQUOT_TYPES, {
  props: ({ data }) => ({
    aliquoterror: data.error,
    aliquotloading: data.loading,
    alltypes: data.allAliquotTypes,
  }),
});

const VisitPicker = graphql(GET_ALL_VISITS, {
  props: ({ data }) => ({
    visiterror: data.error,
    visitloading: data.loading,
    allvisits: data.allVisits,
  }),
});

const AddAliquot = graphql(ADD_ALIQUOT, {
  options: props => ({
    variables: {
      specimenid: props.specimenid,
    },
    refetchQueries: () => [{
      query: GET_ALIQUOT_BY_SPECIMEN_ID,
      variables: { specimenid: props.specimenid },
    }],
  }),
});

const AddAliquotModalMutation = compose(AddAliquot, VisitPicker, AliquotPicker)(AddAliquotModal);

export default AddAliquotModalMutation;
