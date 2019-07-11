import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import PageMenu from '../Header';
import PropTypes from 'prop-types';
import { Table, Button, Input, Grid, Segment, Label, Container, Icon, List, Loader, Dimmer } from 'semantic-ui-react';

export const GET_BOX_CONTENT = gql`
    query($boxid: Int!) {
      allSlots(id: $boxid)
    }
`;

export const GET_BOX_TYPE = gql`
    query($boxid: Int!) {
      boxType(id: $boxid){
        id
        name
        description
        length
        height
        lengthLabel
        heightLabel
        lengthInverted
        heightInverted
      }
    }
`;

class TwoTest extends React.Component {
  render() {
    if (this.props.loadingboxtype || this.props.loadingallSlots) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.errorboxtype || this.props.errorallSlots) {
      return <p> Error! </p>;
    }

    console.log(this.props)

    const allslot = JSON.parse(this.props.allSlots);
    console.log(allslot["111-111 Blood for Plasma 2"]);
    console.log(this.props.length);

    return (
      <div>
        <PageMenu />
      </div>
    );
  }
}


/* works const TestWithData = graphql(GET_BOX_TYPE, {
  options: props => ({
    variables: {
      boxid: 1,
    },
  }),
})(TwoTest); */


const TestWithData2 = graphql(GET_BOX_TYPE, {
  options: props => ({
    variables: {
      boxid: 1,
    },
  }),
  props: ({ data }) => ({
    errorboxtype: data.error,
    loadingboxtype: data.loading,
    ...data.boxType,
  }),
});

const TestWithData1 = graphql(GET_BOX_CONTENT, {
  options: props => ({
    variables: {
      boxid: 1,
    },
  }),
  props: ({ data }) => ({
    errorallSlots: data.error,
    loadingallSlots: data.loading,
    allSlots: data.allSlots,
  }),
});

const TestWithData = compose(TestWithData1, TestWithData2)(TwoTest);
/*  graphql(GET_BOX_CONTENT, {
    props: ({ data }) => ({
      boxid: 1,
      loadingtype: data.loading,
      slots: data,
    }),
  }), */

export default TestWithData;
