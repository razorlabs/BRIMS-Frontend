import { Menu } from 'semantic-ui-react';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { LOGOUT } from '../../Data/Logout';

class LogoutUI extends React.Component {
  handleSubmit = () => { this.props.mutate(); }

  render() {
    return (
      <Menu.Item
       name="logout"
       onClick=
    )
  }
}

const LogoutButton = graphql(LOGOUT)(LogoutUI);

export default LogoutButton;
