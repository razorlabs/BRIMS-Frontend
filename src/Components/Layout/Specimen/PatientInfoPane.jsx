import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Grid, Segment, Label, Container, Icon, List, Loader, Dimmer } from 'semantic-ui-react';


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
                      <List.Content>ID: {`${this.props.data.Patient.id}`}</List.Content>
                    </List.Item>
                    <ListInputSwitch
                      displayName="PID"
                      displayData={this.props.data.Patient.pid}
                      displayIcon="address book"
                    />
                    <ListInputSwitch
                      displayName="External ID"
                      displayData={this.props.data.Patient.externalid}
                      displayIcon="address book outline"
                    />

                  </List>
                </Segment>
                <Segment >
                  <List>
                    <List.Item>
                      <List.Icon name="exclamation" />
                      <List.Content>Next draw: Week 8</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="eyedropper" />
                      <List.Content>Blood <Icon color="blue" name="plus circle" /> </List.Content>
                      <List.Icon name="eyedropper" />
                      <List.Content>Urine <Icon color="blue" name="plus circle" /> </List.Content>
                    </List.Item>
                  </List>
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

export default PatientInfoPane;
