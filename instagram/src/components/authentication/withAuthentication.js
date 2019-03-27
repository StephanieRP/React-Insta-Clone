import React from "react ";

const withAuthenticate = First => Second =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        login: false
      };
    }
    // componentDidMount() {
    //   if (!localStorage.getItem("logIn")) {
    //     this.setState({ login: false });
    //   } else {
    //     this.setState({ login: true });
    //   }
    // }

    render() {
      return this.state.login === false ? <First /> : <Second />;
    }
  };
export default withAuthenticate;
