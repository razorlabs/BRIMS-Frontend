import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Grid, Segment, Label, Container, Icon, List, Loader, Dimmer } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import { GET_PATIENT_BY_ID } from '../../Data/PatientQueryData';
import { EDIT_PATIENT } from '../../Data/PatientMutation';

class ListInputSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'list',
    };
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput(event) {
    if (this.state.display === 'input') {
      this.setState({ display: 'list' });
    } else {
      this.setState({ display: 'input' });
    }
  }


  render() {
    if (this.state.display === 'list') {
      return (
        <List.Item>
          <List.Icon name={this.props.displayIcon} />
          <List.Content>{this.props.displayName}: {this.props.displayData}
            <Button size="mini" icon onClick={this.toggleInput}>
              <Icon fitted name="edit" />
            </Button>
          </List.Content>
        </List.Item>

      );
    }
    return (
      <div>
        <Input defaultValue={this.props.displayData} />
        <Button icon onClick={this.toggleInput}><Icon name="edit" /></Button>
      </div>
    );
  }
}

class PatientInfoPane extends React.Component {

  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    return (
      <Container>
        <Segment>
          <Grid>
            <Grid.Row>
              <Label size="large" attached="top left">
                Patient Info Pane
              </Label>
            </Grid.Row>
            <Container>
              <Segment.Group horizontal>
                <Segment>
                  <List>
                    <List.Item>
                      <List.Icon name="address card" />
                      <List.Content>LIMS ID: {`${this.props.data.patient.id}`}</List.Content>
                    </List.Item>
                    <ListInputSwitch
                      patientid={this.props.data.patient.id}
                      displayName="Patient ID"
                      displayData={this.props.data.patient.pid}
                      displayIcon="address book"
                    />
                      <List.Item>
                      <List.Icon name="laptop" />
                      <List.Content>System Source: {`${this.props.data.patient.source}`}</List.Content>
                    </List.Item>
                  </List>
                </Segment>
                <Segment >
                </Segment>
              </Segment.Group>
            </Container>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

/*
  GraphQL prop data validation
  from GET_PATIENT_BY_ID in ../Data/SpecimenData
*/

PatientInfoPane.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    Patient: PropTypes.object,
  }).isRequired,
};

const PatientInfoPaneWithData = graphql(GET_PATIENT_BY_ID, {
  options: props => ({
    variables: {
      patientid: (props.patientid),
    },
  }),
})(PatientInfoPane);

export default PatientInfoPaneWithData;
