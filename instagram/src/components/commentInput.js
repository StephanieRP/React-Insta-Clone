import React, { Component } from "react";
import dummyData from "../dummy-data";
export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      users: dummyData,
      username: "",
      comment: ""
    };
  }

  inputHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //   addComment = () => {
  //     const newComment = {
  //       comments: this.state.comments
  //     };
  //     this.setState({
  //       users: [...this.state.users, newComment],
  //       comments: ""
  //     });
  //   };

  render() {
    return (
      <form onChange={this.inputHandler} onClick={this.addComment}>
        <input
          type="text"
          placeholder="Add a comment"
          className="add-comment"
        />
        <span> ...</span>
      </form>
    );
  }
}
