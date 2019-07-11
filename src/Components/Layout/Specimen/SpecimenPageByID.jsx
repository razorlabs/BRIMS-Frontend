import React from 'react';
import { Grid } from 'semantic-ui-react';
import PageMenu from '../PageMenu';
import PatientInfoPaneWithData from './PatientInfoPane';
import SpecimenInfoPaneWithData from './SpecimenInfoPane';

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
