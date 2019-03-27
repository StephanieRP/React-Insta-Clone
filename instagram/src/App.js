import React, { Component } from "react";
import "./index.css";
import PostPage from "./components/Post/postPage";
import withAuthenticate from './components/authentication/withAuthentication'
import Login from './components/Login/Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }

  const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login)

  componentDidMount() {

    if (!this.state.login) {
      localStorage.setItem("login", true);
      this.setState({
        login: true
      });
        return <PostPage />;
    
    } else {
      localStorage.removeItem("login");
    }
    this.setState({ login: !this.state.login });
      return <Login />;


      this.setState({
        login: false
      });
  }



  // loginHandler = () => {
  //   if (!this.state.login) {
  //     localStorage.setItem("login", true);
  //   } else {
  //     localStorage.removeItem("login");
  //   }
  //   this.setState({ login: !this.state.login });
  // };

  render() {
    return <ComponentFromWithAuthenticate />;
  }
  
}

export default App;
