import React from "react";

const CommentInput = props => {
  return (
    <form>
      <input type="text" placeholder="Add a comment" className="add-comment" />
      <span> ...</span>
    </form>
  );
};

export default CommentInput;
