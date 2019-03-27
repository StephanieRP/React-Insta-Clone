import React from "react";
import Post from "./post";
import PropTypes from "prop-types";

const PostContainer = props => {
  // console.log("PropsContainer", props);
  return props.users.users.map(user => (
    <Post key={user.id} user={user} likes={user.likes} />
  ));
};

PostContainer.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.imageUrl,
      likes: PropTypes.number
    })
  )
};

export default PostContainer;
