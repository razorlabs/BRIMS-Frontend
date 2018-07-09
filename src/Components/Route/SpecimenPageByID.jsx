import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Header from '../Layout/Header';
import PatientInfoPaneWithData from './PatientInfoPaneWithData';
import SpecimenInfoPaneWithData from './SpecimenInfoPaneWithData';

class SpecimenPageByID extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Grid.Row>
            <PatientInfoPaneWithData patientid={this.props.match.params.id} />
          </Grid.Row>
          <Grid.Row>
            <SpecimenInfoPaneWithData patientid={this.props.match.params.id} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SpecimenPageByID;
