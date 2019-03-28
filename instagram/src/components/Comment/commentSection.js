import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./comment";
import moment from "moment";
import styled from "styled-components";

const Time = styled.p`
  padding-top: 0.5rem;
  color: #a09999;
  font-weight: 300;
`;

const CommentInput = styled.input`
  padding: 0.7rem;
  outline: none;
  width: 97%;
  margin: 0;
  border: none;
  border-top: #e6e6e6 solid 0.5px;
  cursor: pointer;
`;
export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      input: "",
      time: props.time
    };
  }

  inputHandler = event => {
    event.preventDefault();

    this.setState({
      input: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    const newComment = {
      id: Date.now(),
      username: localStorage.getItem("user"),
      text: this.state.input
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      input: ""
    });
  };

  render() {
    return (
      <div>
        <Comment username={this.state} />
        <Time>
          {moment(this.state.time, "MMMM Do YYYY, h:mm:ss a").fromNow()}
        </Time>
        <form onSubmit={this.addNewComment}>
          <CommentInput
            type="text"
            placeholder="Add a comment"
            className="add-comment"
            onChange={this.inputHandler}
          />
          <i className="fas fa-ellipsis-h" />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  input: PropTypes.func,
  addNewComment: PropTypes.func,
  time: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};
