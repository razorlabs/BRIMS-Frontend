import React from 'react';
import { graphql } from 'react-apollo';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { GET_USER } from '../Data/Login';

class PageMenuUI extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.loading) {
      return <p>User info loading....</p>;
    }
    return (
      <Menu size="large" color="blue" inverted >
        <Menu.Item
          name="LIMS"
          as={Link}
          to="/lims"
        />
        <Menu.Menu position="right">
          <Menu.Item name={this.props.user.username} />
          <Menu.Item name="logout" as={Link} to="/lims/logout" />
        </Menu.Menu>
      </Menu>
    );
  }
}

const PageMenu = graphql(GET_USER, {
  props: props => ({
    errors: props.data.error,
    loading: props.data.loading,
    user: props.data.me,
  }),
})(PageMenuUI);


export default PageMenu;
