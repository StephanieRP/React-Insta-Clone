import React from "react";

const withAuthenticate = Login => PostPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        login: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ login: false });
      } else {
        this.setState({ login: true });
      }
    }

    render() {
      console.log("Login", this.state.login);
      return this.state.login === false ? (
        <Login login={this.state.login} />
      ) : (
        <PostPage />
      );
    }
  };
export default withAuthenticate;
