import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div>logo</div>
      <div>Пошук</div>
      <div>{props.children}</div>
    </header>
  );
};

export default Header;
