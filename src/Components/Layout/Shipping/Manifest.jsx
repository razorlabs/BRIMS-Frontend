import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Checkbox, Container, Header, Modal, Table, Button, Segment, Loader, Dimmer } from 'semantic-ui-react';
import { SHIPMENT_MANIFEST } from '../../Data/ShippingQueryData';
import PageMenu from '../PageMenu';
import BoxContents from './BoxContents';

class ManifestUI extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>
    }
    return (
      <div>
        <PageMenu />
        <Container>
          <Header as="h2" attached="top">
            {this.props.data.shipmentManifest.map((box) => {
              return <BoxContents contents={box} />;
            })}
          </Header>
        </Container>
      </div>
    );
  }
}

const Manifest = graphql(SHIPMENT_MANIFEST, {
  options: props => ({
    variables: {
      shipment: (props.match.params.shipment),
    },
  }),
})(ManifestUI);

export default Manifest;
