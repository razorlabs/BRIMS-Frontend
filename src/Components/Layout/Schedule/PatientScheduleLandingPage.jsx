import { Divider, Header, Dimmer, Loader, Label, Table, Button, Container } from 'semantic-ui-react';
import React from 'react';
import PageMenu from '../PageMenu';

import { graphql } from 'react-apollo';
import { ADD_EVENT } from '../../Data/ScheduleMutations';
import { GET_ALL_SCHEDULE } from '../../Data/ScheduleQuery';


const DrawTable = (props) => {
  const schedulejson = JSON.parse(props.scheduledata.schedule);
  const schedulejsonkeys = Object.keys(schedulejson);
  // create an object to hold table header data
  const tableheader = [];
  // add empty space to align values
  tableheader.push(<Table.HeaderCell />);
  // fill header with key values representing "events" like week 1
  schedulejsonkeys.map(x => tableheader.push(<Table.HeaderCell>{x}</Table.HeaderCell>));
  // a wrapper function to return a table cell
  const tablecell = schedule => (<Table.Cell> { schedule } </Table.Cell>);
  // a wrapper fuction to return a button
  const button = specimentype => (<Button size="tiny"> { specimentype } </Button>);
  // a quick function to return the array of specimen for each event(key)
  const jsonvalue = key => schedulejson[key];

  const returnTable = (
    <Container>
      <Divider horizontal>
        <Header as="h3">
          { props.scheduledata.name }
        </Header>
      </Divider>
      <Table celled definition>
        <Table.Header>
          <Table.Row>
            {tableheader}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell >Specimen</Table.Cell>
            {/*
              A lot to unpack here...
              There are events: example: week 1
              And specimen: example: Urine
              A "schedule" is a listing of specimen per event (in an array)
              So the schedule dictionary contains an array of specimen for each event
              example: { "week 1": [Urine, Swab], "week 2": [Dried blood] }
              So the mapping below maps over each event, wraps the event in a table cell
              and wraps each contained specimen in a button for display
            */}
            { schedulejsonkeys.map(jsonvalue).map(values => tablecell(values.map(x => button(x)))) }
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
  return returnTable;
};

class PatientScheduling extends React.Component {
  render() {
    if (this.props.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.error) {
      return <p>Error!</p>;
    }
    return (
      <div>
        <PageMenu />
        <Container>
          <Button>Add Visit</Button>
          <Button>Add Specimen Draw</Button>
          {/* For all schedules create appropriate table display */}
          { this.props.allSchedules.map(x => <DrawTable scheduledata={x} />)}
        </Container>
      </div>
    );
  }
}

const PatientSchedulingWithData = graphql(GET_ALL_SCHEDULE, {
  props: ({ data }) => ({
    error: data.error,
    loading: data.loading,
    allSchedules: data.allSchedules,
  }),
})(PatientScheduling);

export default PatientSchedulingWithData;
