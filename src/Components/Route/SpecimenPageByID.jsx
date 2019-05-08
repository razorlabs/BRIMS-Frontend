import React from 'react';
import { Grid } from 'semantic-ui-react';
import PageMenu from '../Layout/PageMenu';
import PatientInfoPaneWithData from './PatientInfoPaneWithData';
import SpecimenInfoPaneWithData from './SpecimenInfoPaneWithData';

class SpecimenPageByID extends React.Component {
  render() {
    return (
      <div>
        <PageMenu />
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
