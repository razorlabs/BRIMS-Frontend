import { Container, Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import React from 'react';
import { Redirect } from 'react-router-dom';

function errorMessage(Component) {
  return function withError({ loginerror }) {
    if (loginerror) {
      return
    }
    return <div />;
  };
}

class Login extends React.Component {
    state = {
      username: '',
      password: '',
      loggedin: false,
      loginerror: false,
    };

    onChange = event => this.setState({ [event.target.name]: event.target.value });

    handleSubmit = () => {
      this.props.mutate({
        variables: {
          username: this.state.username,
          password: this.state.password,
        },
      })
        .then(({ data }) => this.setState(() => ({
          loggedin: true,
        })))
        .catch(({ error }) => this.setState(() => ({
          loginerror: true,
        })));
    };

    // function returns conditional component based on graphql error return
    errorRender() {
      if (this.state.loginerror) {
        return (
          <Message
            error
            header="Unable to login"
            content="Username or password is incorrect"
          />
        );
      }
      return <div />;
    }

    render() {
      if (this.state.loggedin === true) {
        return <Redirect to="/lims" />;
      }

      return (
        <Grid columns={3}>
          <Grid.Row />
          <Grid.Row>
            <Grid.Column />
            <Grid.Column>
              <Container>
                <Segment>
                  <Header size="huge">Please Login </Header>
                  <Form
                    onSubmit={this.handleSubmit}
                    error={this.state.loginerror}
                  >
                    <Form.Field>
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        error={this.state.loginerror}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.loginerror}
                      />
                    </Form.Field>
                    <Button color="blue" fluid type="submit">Submit</Button>
                  </Form>
                  { this.errorRender() }
                </Segment>
              </Container>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
          <Grid.Row />

        </Grid>
      );
    }
}


export default Login;
