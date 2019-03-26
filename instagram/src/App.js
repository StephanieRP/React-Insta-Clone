import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./index.css";
import Header from "./components/header";
import PostContainer from "./components/postContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      comment: ""
    };
  }

  componentDidMount() {
    this.setState({
      users: dummyData
    });
  }

  addNewComment = (index, newComment) => {
    const commentCopy = this.state.users
      .slice()
      .filter(user => user.index === index);
    commentCopy.push(newComment);
    this.setState({
      users: newComment
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
