import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

class Template extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Replace: React.PropTypes.object,
    }).isRequired,
  }
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    return (
      <p> {`${this.props.data.Replace}`} </p>
    );
  }
}

export default Template;

