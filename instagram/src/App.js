import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./index.css";
import Header from "./components/header";
import PostContainer from "./components/postContainer";
import Loader from "react-loader-spinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      liked: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        users: dummyData
      });
    }, 2000);
  }

  likePost = like => {};

  //not working yet
  addNewComment = comment => {
    const commentCopy = this.state.users.slice();

    commentCopy.push(comment);
    this.setState({
      users: commentCopy
    });
  };

  render() {
    if (this.state.users.length === 0) {
      return <Loader type="Triangle" color="blue" height="100" width="100" />;
    }
    return (
      <div className="main-container">
        <Header />
        <PostContainer users={this.state} addNewComment={this.addNewComment} />
      </div>
    );
  }
}

export default App;
