import React from "react";
import "../../index.css";
import CommentSection from "../Comment/commentSection";
import PropTypes from "prop-types";

export default class Post extends React.Component {
  constructor(props) {
    console.log("constructor", props);

    super(props);
    this.state = {
      likes: props.user.likes
    };
  }

  increaseLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="post-container">
        <div className="post">
          <div className="post-thumbnail">
            <div>
              <img src={this.props.user.thumbnailUrl} alt="user thumbnail" />
            </div>
            <p>{this.props.user.username}</p>
          </div>
          <div className="post-picture">
            <img src={this.props.user.imageUrl} alt="posts" />
            <div className="post-icons">
              <i className="far fa-heart" onClick={this.increaseLikes} />
              <i className="far fa-comment" />
            </div>
            <div className="post-likes">
              <p>{this.state.likes} likes</p>
            </div>
            <div className="post-comments">
              <CommentSection
                time={this.props.user.timestamp}
                id={this.props.user.id}
                comments={this.props.user.comments}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};
