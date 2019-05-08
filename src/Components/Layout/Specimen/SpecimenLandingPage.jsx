import React from 'react';
import { graphql } from 'react-apollo';
import { Segment, Header, Dimmer, Loader, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PageMenu from '../PageMenu';
import SpecimenLandingPageTableHeader from './SpecimenLandingPageTableHeader';
import { GET_ALL_SPECIMEN } from '../../Data/SpecimenQueryData';

class SpecimenLandingPage extends React.Component {
  buildTable = item => (
    <Table.Row>
      <Table.Cell>
        {item.id}
      </Table.Cell>
      <Table.Cell>
        <Link to={`/lims/specimen/${item.patient}`}>{item.patientid}</Link>
      </Table.Cell>
      <Table.Cell>
        {item.type}
      </Table.Cell>
      <Table.Cell>
        {item.collectdate}
      </Table.Cell>
      <Table.Cell>
        {item.collecttime}
      </Table.Cell>
      <Table.Cell>
        {item.volume}
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
        <Segment compact basic color="red">
          <Header as="h1"> Specimen </Header>
        </Segment>
        <Table celled color="red">
          <SpecimenLandingPageTableHeader />
          <Table.Body>
            { this.props.specimen.map(x => this.buildTable(x)) }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const SpecimenLandingPageWithData = graphql(GET_ALL_SPECIMEN, {
  props: ({ data }) => ({
    error: data.error,
    loading: data.loading,
    specimen: data.allSpecimen,
  }),
})(SpecimenLandingPage);

export default SpecimenLandingPageWithData;
