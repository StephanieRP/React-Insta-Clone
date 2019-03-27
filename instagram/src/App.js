import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./index.css";
import Header from "./components/Search/header";
import PostContainer from "./components/Post/postContainer";
import Loader from "react-loader-spinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        users: dummyData
      });
    }, 2000);
  }

  //not working yet
  // addNewComment = (id, comment) => {
  //   const newComment = this.state.users.slice().filter(user => user.id === id);
  //   newComment.comments.push(comment);
  //   this.setState({
  //     users: newComment
  //   });
  // };

  render() {
    if (this.state.users.length === 0) {
      return <Loader type="Triangle" color="blue" height="100" width="100" />;
    }

    return (
      <div className="main-container">
        <Header />
        <PostContainer users={this.state} />
      </div>
    );
  }
}

export default App;
