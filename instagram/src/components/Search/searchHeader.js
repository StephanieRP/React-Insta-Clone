import React from "react";

const Header = props => {
  console.log("Search", props);
  return (
    <div className="header">
      <div className="header-left">
        <i className="fab fa-instagram" />
        <h1>Instagram</h1>
      </div>
      <div className="search-bar">
        <i className="fas fa-search" />
        <input type="text" placeholder="Search" onChange={props.filterPost} />
      </div>
      <div className="header-right">
        <button className="logout-btn" onClick={props.logOut}>
          Log Out
        </button>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default Header;
