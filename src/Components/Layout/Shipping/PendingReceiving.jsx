import { Tab, Table, Dimmer, Loader } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import React from 'react';
import PendingReceivingHeader from './PendingReceivingHeader';
import PendingReceivingInfoRow from './PendingReceivingInfoRow';
import { GET_PENDING_RECEIVING } from '../../Data/ShippingQueryData';

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

const PendingReceivingWithData = graphql(GET_PENDING_RECEIVING)(PendingReceiving);
export default PendingReceivingWithData;
