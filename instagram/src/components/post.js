import React from "react";
import Comment from "./comment";
import "../index.css";
import moment from "moment";
import CommentInput from "./commentInput";

const Post = props => {
  console.log(props);
  return (
    <div className="post-container">
      <div className="post">
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
            <Comment users={props.user} />
            <p className="time">
              {moment(
                props.user.timestamp,
                "MMMM Do YYYY, h:mm:ss a"
              ).fromNow()}
            </p>
            <CommentInput addNewComment={props.addNewComment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
