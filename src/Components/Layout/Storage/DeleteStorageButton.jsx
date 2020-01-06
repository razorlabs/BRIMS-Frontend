import { Button, Icon } from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import React from 'react';
import { DELETE_STORAGE } from '../../Data/StorageMutation';
import { GET_STORAGE_UI } from '../../Data/StorageQuery';

class TrashButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("fired");
    this.props.mutate({4
      variables: {
        id: this.state.id,
      },
    });
  }
  render() {
    return (
      <Button icon>
        <Icon name="trash alternate" />
      </Button>
    );
  }
}

const DeleteStorage = graphql(DELETE_STORAGE, {
  options: props => ({
    refetchQueries: () => [{ query: GET_STORAGE_UI }],
  }),
});

const DeleteStorageButton = compose(DeleteStorage)(TrashButton);

export default DeleteStorageButton;
