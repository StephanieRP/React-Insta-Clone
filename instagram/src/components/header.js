import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <i className="fab fa-instagram" />
        <h1>Instagram</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-right">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default Header;
