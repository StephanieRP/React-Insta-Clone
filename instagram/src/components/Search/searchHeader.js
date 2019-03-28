import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
  border-bottom: #e6e6e6 solid 0.5px;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const Input = styled.input`
  padding: 0.5rem;
  text-align: center;
  outline: none;
  border: 0.5px solid #e6e6e6;
  cursor: pointer;
`;

const Header = props => {
  console.log("Search", props);
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <i
          className="fab fa-instagram"
          style={{ fontSize: "3rem", paddingRight: "1rem" }}
        />
        <h1 style={{ fontSize: "2.8rem" }}>Instagram</h1>
      </HeaderLeft>
      <div>
        <i
          className="fas fa-search"
          style={{
            position: "absolute",
            top: 23,
            left: 700,
            curser: "pointer",
            color: "#e6e6e6"
          }}
        />
        <Input type="text" placeholder="Search" onChange={props.filterPost} />
      </div>
      <div className="header-right">
        <Button color="primary" onClick={props.logOut}>
          Log Out
        </Button>
        <i
          className="far fa-compass"
          style={{ fontSize: "1.5rem", padding: "0 .5rem", fontWeight: "100" }}
        />
        <i
          className="far fa-heart"
          style={{ fontSize: "1.5rem", padding: "0 .5rem", fontWeight: "100" }}
        />
        <i
          className="far fa-user"
          style={{ fontSize: "1.5rem", padding: "0 .5rem", fontWeight: "100" }}
        />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
