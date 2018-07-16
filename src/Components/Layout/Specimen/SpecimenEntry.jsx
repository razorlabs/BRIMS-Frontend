import { Form, Dropdown, Button } from 'semantic-ui-react';
import React from 'react';

class SpecimenEntry extends React.Component {
  state = { id: '', pid: '', externalid: '' }

  handleChange = (event, { name, value }) => (
    this.setState({ [name]: value })
  )

  handleSubmit = () => {
    const { id, pid, externalid } = this.state;
    this.props.mutate({
      variables: { id: this.state.id, pid: this.state.pid, externalid: this.state.externalid },
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
          <label>ID</label>
          <input placeholder="ID" name="id" value={this.state.id} onChange={this.handleChange} />
        </Form.Field>
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
