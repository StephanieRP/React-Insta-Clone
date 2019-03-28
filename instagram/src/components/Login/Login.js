import React from "react";
import PropTypes from "prop-types";

class Login extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      user: "",
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
      <div className="login-container">
        <form>
          <img src="../../../img/Instagram_logo.png" alt="logo" />
          <h1> Login </h1>
          <div className="login-input">
            <input
              placeholder="Username"
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.inputHandler}
              required
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
              required
            />
            <button onClick={this.loginCheck}> Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
