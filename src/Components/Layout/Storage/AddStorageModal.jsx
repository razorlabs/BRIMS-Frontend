import { Dropdown, Modal, Form, Button } from 'semantic-ui-react';
import React from 'react';

import { graphql, compose } from 'react-apollo';
import { ADD_STORAGE } from '../../Data/StorageMutation';
import { GET_ALL_STORAGE, GET_STORAGE_UI } from '../../Data/StorageQuery';

class AddStorageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      container: '',
      cssIcon: '',
      modalOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value });
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = () => {
    this.props.mutate({
      variables: {
        name: this.state.name,
        description: this.state.description,
        container: this.state.container,
        cssIcon: this.state.cssIcon,
      },
    });
    console.log(this.state);
    this.handleClose();
  }

  render() {
  // TODO handle error
    let storagelist;
    if (this.props.storageloading) {
      storagelist = 'Loading...';
    } else {
      storagelist = this.props.allstorage.map(x => ({ key: x.name, value: x.id, text: x.name }));
    }
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} >Add Storage</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add Storage</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Name</label>
              <Form.Input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Form.Input placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Where is it stored?</label>
              <Dropdown
                name="container"
                placeholder="Storage"
                selection
                search
                options={storagelist}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Button floated="right" content="Submit" />
            <Form.Field />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const StorageData = graphql(GET_ALL_STORAGE, {
  props: ({ data }) => ({
    storageerror: data.error,
    storageloading: data.loading,
    allstorage: data.allStorage,
  }),
});

const AddStorage = graphql(ADD_STORAGE, {
  options: props => ({
    refetchQueries: () => [{ query: GET_STORAGE_UI }, { query: GET_ALL_STORAGE }],
  }),
});

const AddStorageModalMutation = compose(AddStorage, StorageData)(AddStorageModal);

export default AddStorageModalMutation;
