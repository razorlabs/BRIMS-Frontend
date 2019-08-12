import React from 'react';
import { graphql } from 'react-apollo';
import { Grid, Input, Pagination, Icon, Segment, Header, Dimmer, Loader, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PageMenu from '../PageMenu';
import { GET_ALL_PATIENTS } from '../../Data/PatientQueryData';
import AddPatientModalMutation from './AddPatientModal';

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
  // page used to slice all patients array for display
  // if moved to backend search will be limited to returned patient scope
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      search: '',
      results: '',
    };
  }

  onChange = (e) => {
    const re = new RegExp(e.target.value, 'i');
    const results = this.props.patients.filter(patient => re.test(patient.pid));
    this.setState({
      search: e.target.value,
      results: results,
      page: 1,
    });
    this.totalPages(results);
  }

  handlePageChange = (e, { activePage }) => {
    this.setState({ page: activePage });
  }


  totalPages = (results) => {
    if (results === '') {
      return (Math.ceil(this.props.patients.length / 10));
    }
    return (Math.ceil(results.length / 10));
  };


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
    const allpatients = this.props.patients;
    let tablebody;

    if (this.state.results === '') {
      tablebody = allpatients.slice(
        (this.state.page - 1) * 10,
        ((this.state.page - 1) * 10) + 10,
      ).map(x => this.buildTable(x));
    } else {
      tablebody = this.state.results.slice(
        (this.state.page - 1) * 10,
        ((this.state.page - 1) * 10) + 10,
      ).map(x => this.buildTable(x));
    }


    return (
      <div>
        <PageMenu />
        <Grid divided="vertically">
          <Grid.Row columns={5}>
            <Grid.Column>
              <Segment compact basic color="yellow">
                <Header as="h1"> Patients </Header>
              </Segment>
            </Grid.Column>
            <Grid.Column />
            <Grid.Column width={9} textAlign="right">
              <Input
                placeholder="Search Patient"
                value={this.search}
                onChange={this.onChange}
              >
                <input style={{ borderRadius: '100px' }} />
              </Input>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Table celled color="yellow">
          <PatientTableHeader />
          <Table.Body>
            {tablebody}
          </Table.Body>
        </Table>
        <Grid divided="vertically">
          <Grid.Row columns={6}>
            <Grid.Column>
              <Pagination
                boundaryRange={0}
                activePage={this.state.page}
                ellipsisItem={null}
                totalPages={this.totalPages(this.state.results)}
                onPageChange={this.handlePageChange}
              />
            </Grid.Column>
            <Grid.Column />
            <Grid.Column />
            <Grid.Column />
            <Grid.Column />
            <Grid.Column>
              <AddPatientModalMutation />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const PatientLandingPageWithData = graphql(GET_ALL_PATIENTS, {
  props: props => ({
    error: props.data.error,
    loading: props.data.loading,
    patients: props.data.allPatients,
  }),
})(PatientLandingPage);

export default PatientLandingPageWithData;
