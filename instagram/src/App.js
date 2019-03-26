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

  addNewComment = () => {
    const newComment = {
      comments: this.state.comments
    };
    this.setState({
      users: [...this.state.users, newComment],
      comments: ""
    });
  };

  render() {
    return (
      <div className="main-container">
        <Header />
        <PostContainer users={this.state} addNewComment={this.addNewComment} />
      </div>
    );
  }
}

export default App;
