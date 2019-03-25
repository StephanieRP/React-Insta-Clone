import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./index.css";
import Header from "./components/header";
import PostContainer from "./components/postContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: dummyData
    };
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <PostContainer users={this.state} />
      </div>
    );
  }
}

export default App;
