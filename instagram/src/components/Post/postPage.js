import React, { Component } from "react";
import dummyData from "../../dummy-data";
import "../../index.css";
import Header from "../Search/searchHeader";
import PostContainer from "./postContainer";
import Loader from "react-loader-spinner";

class PostPage extends Component {
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

  render() {
    if (this.state.users.length === 0) {
      return (
        <div className="loader">
          <Loader type="Rings" color="blue" height="100" width="100" />;
        </div>
      );
    }

    return (
      <div className="main-container">
        <Header />
        <PostContainer users={this.state} />
      </div>
    );
  }
}

export default PostPage;
