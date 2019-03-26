import React, { Component } from "react";
export default class CommentInput extends Component {
  constructor(props) {
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
    const userComment = {
      username: "new user",
      text: this.state.comment
    };
    this.props.addNewComment(this.state.comments, userComment);
    this.setState({
      comments: ""
    });
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
        <i className="fas fa-ellipsis-h" />
      </form>
    );
  }
}
