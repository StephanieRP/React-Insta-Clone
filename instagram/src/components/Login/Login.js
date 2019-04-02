import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "reactstrap";

const LoginContainer = styled.div`
  width: 50%;
  margin: 10rem auto;
  background: #e6e6e6;
  padding: 5rem;
  font-size: 2rem;
  text-align: center;
`;

const LoginInput = styled.input`
  width: 100%;
  margin: 1rem 0;
  padding: 0.6rem;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem("user"),
      password: ""
    };
  }

  inputHandler = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loginCheck = () => {
    let user = this.state.user;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <LoginContainer>
        <form>
          <h1 style={{ fontSize: "2.5rem", letterSpacing: 2 }}> Instagram </h1>
          <div className="login-input">
            <LoginInput
              placeholder="Username"
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.inputHandler}
              required
            />
            <LoginInput
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
              required
            />
            <Button
              color="primary"
              onClick={this.loginCheck}
              style={{ fontSize: "1.5rem" }}
            >
              Log In
            </Button>
          </div>
        </form>
      </LoginContainer>
    );
  }
}

export default Login;
