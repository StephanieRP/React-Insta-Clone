import React, { Component } from "react";
export default class CommentInput extends Component {
  constructor(props) {
    console.log("Input", props);
    super(props);
    this.state = {
      comments: ""
    };
  }

  inputHandler = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addComment = event => {
    event.preventDefault();
    const newComment = {
      username: "new user",
      text: this.state.comment
    };
    this.props.addNewComment(this.state.comments, newComment);
    this.setState({ comments: "" });
  };

  render() {
    return (
      <form onSubmit={this.addComment}>
        <input
          type="text"
          placeholder="Add a comment"
          className="add-comment"
          onChange={this.inputHandler}
        />
        <span> ...</span>
      </form>
    );
  }
}
