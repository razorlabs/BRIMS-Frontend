import { Tab, Table, Container, Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import PendingShipmentHeader from './PendingShipmentHeader';
import PendingShipmentInfoRow from './PendingShipmentInfoRow';

class PendingShipment extends React.Component {
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
          <PendingShipmentHeader />
          {this.props.data.allPendingshipments.map((shipping) => {
            return <PendingShipmentInfoRow shipping={shipping} key={shipping.id} />;
          })}
        </Table>
      </Tab.Pane>
    );
  }
}

export default PendingShipment;
