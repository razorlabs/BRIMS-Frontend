import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, Label, Container, Icon, List, Loader, Dimmer } from 'semantic-ui-react';


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
                      <List.Content>SSID: {`${this.props.data.Patient.id}`}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="address book" />
                      <List.Content>PID: {`${this.props.data.Patient.pid}`}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="address book outline" />
                      <List.Content>External ID: {`${this.props.data.Patient.externalid}`}</List.Content>
                    </List.Item>
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
