import React from "react";
import "../../index.css";
import CommentSection from "../Comment/commentSection";
import styled from "styled-components";
import PropTypes from "prop-types";

const PostContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

const PostWrapper = styled.div`
  border: #e6e6e6 solid 0.5px;
  padding-top: 1rem;
  width: 50%;
`;

const PostImageWrapper = styled.div`
  padding-left: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
`;

const PostUserImage = styled.img`
  border-radius: 50%;
  width: 30px;
`;

const PostUsername = styled.p`
  font-size: 1rem;
  display: inline-block;
  padding-left: 0.5rem;
  padding-top: 0.4rem;
  font-weight: 600;
`;
export default class Post extends React.Component {
  constructor(props) {
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
      <PostContainer>
        <PostWrapper>
          <PostImageWrapper>
            <div>
              <PostUserImage
                src={this.props.user.thumbnailUrl}
                alt="user thumbnail"
              />
            </div>
            <PostUsername>{this.props.user.username}</PostUsername>
          </PostImageWrapper>
          <div className="post-picture">
            <img
              src={this.props.user.imageUrl}
              alt="posts"
              style={{ width: "100%" }}
            />
            <div className="post-icons">
              <i
                className="far fa-heart"
                style={{ fontSize: "1.3rem", padding: "0.2rem 0.4rem" }}
                onClick={this.increaseLikes}
              />
              <i
                className="far fa-comment"
                style={{ fontSize: "1.3rem", padding: "0.2rem 0.4rem" }}
              />
            </div>
            <div className="post-likes">
              <p style={{ fontSize: "1rem", padding: "0.3rem" }}>
                {this.state.likes} likes
              </p>
            </div>
            <div className="post-comments">
              <CommentSection
                time={this.props.user.timestamp}
                id={this.props.user.id}
                comments={this.props.user.comments}
              />
            </div>
          </div>
        </PostWrapper>
      </PostContainer>
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
