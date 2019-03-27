import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

const Comment = props => {
  console.log("Comment", props);

  return props.username.comments.map(comment => (
    <p key={comment.id} className="new-comment">
      <span>{comment.username}</span> {comment.text}
    </p>
  ));
};

Comment.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          username: PropTypes.username,
          text: PropTypes.string
        })
      )
    })
  )
};

export default Comment;
