import React, { Component } from "react";
import "./index.css";
import PostPage from "./components/Post/postPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }

  render() {
    return <PostPage />;
  }
}

export default App;
