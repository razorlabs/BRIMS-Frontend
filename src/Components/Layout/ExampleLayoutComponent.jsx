import React from 'react';

class ExampleComponent extends React.Component {

  render() {
    if (this.props.data.loading) return <p> Loading...</p>
    if (this.props.data.error) return <p> Error! </p>
    if (!this.props.data.loading) {
      console.log(this.props.data.Patient.id)
    }
    return (
      <p> {`${this.props.data.Patient.pid}`} </p>
    );
  }
}

export default ExampleComponent;

