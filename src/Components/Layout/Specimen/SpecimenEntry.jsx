import { Form, Dropdown, Button } from 'semantic-ui-react';
import React from 'react';

class SpecimenEntry extends React.Component {
  state = { pid: '', externalid: '' }

  handleChange = event => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = () => {
    const { pid, externalId } = this.state;
    this.props.mutate({
      variables: { pid: this.state.pid, externalId: this.state.externalid },
    })
      .then(({ data }) => {
        console.log('got data', data);
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>PID (Patient ID)</label>
          <input placeholder="Patient ID" name="pid" value={this.state.pid} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>External ID</label>
          <input placeholder="External ID" name="externalid" value={this.state.externalid} onChange={this.handleChange} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SpecimenEntry;
