import React from "react ";

class Login extends React.Components {
  state = {
    user: "",
    password: "",
    login: false
  };

  loginHandler = () => {
    if (!this.state.login) {
      localStorage.setItem("login", true);
    } else {
      localStorage.removeItem("login");
    }
    this.setState({ login: !this.state.login });
  };

  render() {
    return (
      <div className="login-container">
        <form>
          <h1> Login </h1>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button> Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
