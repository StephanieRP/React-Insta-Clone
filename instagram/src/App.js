import React, { Component } from "react";
import "./index.css";
import PostPage from "./components/Post/postPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostPage);
class App extends Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}
export default App;
