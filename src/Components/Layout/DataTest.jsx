import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import Header from './Header';

const DataTest = () => (
  <Query query={gql`
      {
        allPatients {
          id
          pid
          externalid
          specimen
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>ERROR</p>;

      return data.allPatients.map(({
        id, pid, externalid, specimen,
        }) => (
          <div key={id}>
            <p>{`${pid} and ${externalid} and ${specimen.type}`}</p>
          </div>
      ));
    }}
  </Query>
);


export default DataTest;

