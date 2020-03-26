import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { LOGOUT, GET_REDIRECT_URL } from '../../Data/Logout';

class LogoutComponent extends React.Component {
  render() {
    if (this.props.loading) {
      return (<p>Logging out...</p>);
    }
    if (this.props.error) {
      return (<p>Error logging out!</p>);
    }
    return (
      <Redirect to={this.props.redirect} />
    );
  }
}

const Logout = graphql(LOGOUT);

const RedirectUrl = graphql(GET_REDIRECT_URL, {
  props: ({ data }) => ({
    error: data.error,
    loading: data.loading,
    redirect: data.redirectUrl,
  }),
});

const LogoutRedirect = compose(Logout, RedirectUrl)(LogoutComponent);
export default LogoutRedirect;
