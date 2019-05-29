import React from 'react';
import { graphql } from 'react-apollo';
import { Icon, Segment, Header, Dimmer, Loader, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PageMenu from '../PageMenu';
import { GET_ALL_PATIENTS } from '../../Data/PatientQueryData';
import PatientTableHeader from './PatientLandingPageTableHeader';


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
