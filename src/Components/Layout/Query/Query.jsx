import React from 'react';
import { graphql, Query, compose } from 'react-apollo';
import { Dimmer, Table, Loader } from 'semantic-ui-react';
import gql from 'graphql-tag';
import PageMenu from '../PageMenu';
import { GET_ALL_PATIENTS } from '../../Data/PatientQueryData';

const ALL_QUERY = gql`
  query allQuery($allPatients: Boolean!, $allSpecimen: Boolean!, $allAliquot: Boolean!) {
    allPatients @skip(if: $allPatients) {
      id
      pid
      externalId
      source
      synced
      syncDate
    },
    allSpecimen @skip(if: $allSpecimen) {
      id
      patientid
      type
      collectdate
      collecttime
      volume
      patient
    },
    allAliquot @skip(if: $allAliquot) {
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
  constructor(props) {
    super(props);
    this.state = {
      patients: false,
      allPatients: true,
      allAliquot: true,
      headeroptions: [],
    };
  }
  render() {
    if (this.props.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.error) {
      return <p> Error! </p>;
    }
    console.log(Object.keys(this.props.allPatients[0]));
    return (
      <div>
        <PageMenu />
      </div>
    );
  }
}

const DisplayQueryWithData = compose(
  graphql(GET_ALL_PATIENTS, {
      //skip: props => !props.patients,
      props: ({ data }) => ({
        error: data.error,
        loading: data.loading,
        allPatients: data.allPatients
      }),

  }),
)(DisplayQuery);

export default DisplayQueryWithData;
