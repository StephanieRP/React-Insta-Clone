import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  console.log("Comment", props);

  return props.users.comments.map(comment => (
    <div className="post-comment-container">
      <p className="post-comment">
        <span>{comment.username}</span> {comment.text}
      </p>
      <p>Time</p>
      <div className="post-comment--add">
        <input type="text" placeholder="Add a comment" /> <span> ...</span>
      </div>
    </div>
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
