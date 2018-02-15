import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { login } from "../../actions";

export class LoginForm extends React.Component {
  state = {
    login: "",
    password: ""
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmitForm = () => {
    const { login, password } = this.state
    const userData = {
      login,
      password
    };
    this.props.onSubmit(userData);
  }

  render() {
    const {login, password} = this.state;
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.handleSubmitForm} >
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name="login"
                  value={login} 
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password"
                  value={password} 
                  onChange={this.handleChange}
                />

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            {/* <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message> */}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onSubmit: userData => dispatch(login(userData))
})

export default connect(undefined, mapDispatchToProps)(LoginForm);