import { Container, Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import React from 'react';

class Login extends React.Component {
    state = { username: '', password: '' };

    onChange = event => this.setState({ [event.target.name]: event.target.value })

    handleSubmit = () => {
      this.props.mutate({
        variables: { username: this.state.username, password: this.state.password },
      })
        .then(({ data }) => {
          console.log('got data', data);
        }).catch((error) => {
          console.log('there was an error sending the query', error);
        });
    };


  render() {
    return (
      <Grid columns={3}>
        <Grid.Row />
        <Grid.Row>
          <Grid.Column />
            <Grid.Column>
              <Container>
                <Segment>
                  <Header size="huge">Please Login </Header>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
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
                      />
                    </Form.Field>
                    <Button color="blue" fluid type="submit">Submit</Button>
                  </Form>
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
