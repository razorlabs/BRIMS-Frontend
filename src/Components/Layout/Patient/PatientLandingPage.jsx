import React from 'react';
import { graphql } from 'react-apollo';
import { Button, Icon, Segment, Header, Dimmer, Loader, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PageMenu from '../PageMenu';
import { GET_ALL_PATIENTS } from '../../Data/PatientQueryData';

/*
  Header values for the patient table for patient landing page

  See backend model for all_patients (allPatients) for reference

  While we could map over the values coming from graphql
    1) Unwanted objects sneak in that are useful but not as table headers
    2) It is currently overengineering and otherwise opaque
    (table headers would be edited in schema)

  If there are a large number of table changes that happen in the future then
  mapping over the values to create the header should be revisited

  Similiar to SpecimenLandingPageHeader
*/

const PatientTableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>ID</Table.HeaderCell>
      <Table.HeaderCell>PID</Table.HeaderCell>
      <Table.HeaderCell>External ID</Table.HeaderCell>
      <Table.HeaderCell>System Source</Table.HeaderCell>
      <Table.HeaderCell>Synced</Table.HeaderCell>
      <Table.HeaderCell>SyncDate</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

class PatientLandingPage extends React.Component {
  buildTable = item => (
    <Table.Row>
      <Table.Cell>
        {item.id}
      </Table.Cell>
      <Table.Cell>
        <Link to={`/lims/specimen/${item.id}`}>{item.pid}</Link>
      </Table.Cell>
      <Table.Cell>
        {item.externalId}
      </Table.Cell>
      <Table.Cell>
        {item.source}
      </Table.Cell>
      <Table.Cell>
        {item.synced ? <Icon name="check" /> : <Icon name="user x" />}
      </Table.Cell>
      <Table.Cell>
        {item.syncDate}
      </Table.Cell>
    </Table.Row>
  )

  render() {
    if (this.props.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.error) {
      return <p> Error! </p>;
    }
    return (
      <div>
        <PageMenu />
        <Segment compact basic color="yellow">
          <Header as="h1"> Patients </Header>
        </Segment>
        <Table celled color="yellow">
          <PatientTableHeader />
          <Table.Body>
            { this.props.patient.map(x => this.buildTable(x)) }
          </Table.Body>
        </Table>
        <Segment basic>
          <Button floated="right">Add Patient</Button>
        </Segment>
      </div>
    );
  }
}

const PatientLandingPageWithData = graphql(GET_ALL_PATIENTS, {
  props: ({ data }) => ({
    error: data.error,
    loading: data.loading,
    patient: data.allPatients,
  }),
})(PatientLandingPage);

export default PatientLandingPageWithData;
