import { Dropdown, Modal, Form, Button } from 'semantic-ui-react';
import React from 'react';

import { graphql } from 'react-apollo';
import { LOGOUT } from '../../Data/Logout';

class LogoutUI extends React.Component {

  handleSubmit = () => { this.props.mutate(); }

  render() {
    let drawlist;
    /* TODO error out if pid/external id already exists suggest merge */
    if (this.props.scheduleloading) {
      drawlist = 'Loading...';
    } else {
      drawlist = this.props.allschedule.map(x => ({ key: x.name, value: x.id, text: x.name }));
    }
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} >Add Patient</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add Patient</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>PID</label>
              <Form.Input placeholder="PID" name="pid" value={this.state.pid} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>External ID</label>
              <Form.Input placeholder="External ID" name="externalid" value={this.state.externalid} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Draw Schedule</label>
              <Dropdown
                name="draw"
                placeholder="Draw Schedule"
                selection
                search
                options={drawlist}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Button floated="right" content="Submit" />
            <Form.Field />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const LogoutButton = graphql(LOGOUT)(LogoutUI);

export default LogoutButton;
