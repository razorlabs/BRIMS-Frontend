import React from 'react';
import { graphql, Query } from 'react-apollo';
import { Dimmer, Table, Loader } from 'semantic-ui-react';
import gql from 'graphql-tag';
import PageMenu from '../PageMenu';

const ALL_QUERY = gql`
  query allQuery($patient: Boolean!, $specimen: Boolean!, $aliquot: Boolean!) {
    allPatients @skip(if: $patient) {
      id
      pid
      externalId
      source
      synced
      syncDate
    },
    allSpecimen @skip(if: $specimen) {
      id
      patientid
      type
      collectdate
      collecttime
      volume
      patient
    },
    allAliquot @skip(if: $aliquot) {
      id
      specimenid
      visit
      collectdate
      collecttime
      volume
      notes
    },
  }
`;


class DisplayQuery extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    console.log(this.props.data.allSpecimen);
    return (
      <div>
        <PageMenu />
        <Table />
      </div>
    );
  }
}

const DisplayQueryWithData = graphql(ALL_QUERY, {
  options: props => ({
    variables: {
      patient: true,
      specimen: false,
      aliquot: true,
    },
  }),
})(DisplayQuery);

export default DisplayQueryWithData;
