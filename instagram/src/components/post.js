import React from "react";
import Comment from "./comment";

const Post = props => {
  // console.log("PropsPost", props);

  return (
    <div className="post-container">
      <div className="post-thumbnail">
        <div>
          <img src={props.user.thumbnailUrl} alt="user thumbnail" />
        </div>
        <p>{props.user.username}</p>
      </div>
      <div className="post-picture">
        <img src={props.user.imageUrl} alt="posts" />
        <div className="post-icons">
          <i className="far fa-heart" />
          <i class="far fa-comment" />
        </div>
        <div className="post-likes">
          <p>{props.user.likes} likes</p>
        </div>
        <div className="post-comments">
          <Comment key={props.user.comments.id} users={props.user} />
        </div>
      </div>
    </div>
  );
};

export default Post;
