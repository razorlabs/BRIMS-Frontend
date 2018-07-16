import { Tab, Table, Container, Dimmer, Loader } from 'semantic-ui-react';
import React from 'react';
import PendingReceivingHeader from './PendingReceivingHeader';
import PendingReceivingInfoRow from './PendingReceivingInfoRow';

class PendingReceiving extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    return (
      <Tab.Pane>
        <Table padded celled>
          <PendingReceivingHeader />
          {this.props.data.allPendingreceivings.map((receive) => {
            return <PendingReceivingInfoRow receive={receive} key={receive.id} />;
          })}
        </Table>
      </Tab.Pane>
    );
  }
}

export default PendingReceiving;
