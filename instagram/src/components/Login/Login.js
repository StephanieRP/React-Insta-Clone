import React from "react ";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }


  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loginCheck = event => {
    event.preventDefault();
    let logIn = this.state.user;
    localStorage.setItem('logIn', login)
    }


  render() {

    return (
      <div className="login-container">
        <form onSubmit={this.loginCheck}>
          <p>Logo </p>
          <h1> Login </h1>
          <input type="text" placeholder="Username" value={this.state.user} />
          <input
            type="text"
            placeholder="Password"
            value={this.state.password}
          />
          <button> Login</button>
        </form>
      </div>
    );
};

  

export default Login;
