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
      users: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        users: dummyData
      });
    }, 2000);
  }

  logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  filterPost = posts => {
    const post = this.state.users.filter(p => {
      if (p.username.includes(posts.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: post });
  };

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
        <Header
          logOut={this.logOut}
          filterPost={this.filterPost}
          filteredPost={this.state.filteredPosts}
        />
        <PostContainer
          users={this.state}
          // posts={this.state.filteredPosts}
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.users
          }
        />
      </div>
    );
  }
}

export default PostPage;
