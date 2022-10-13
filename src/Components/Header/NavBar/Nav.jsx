import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/home">My Page</NavLink>
      <NavLink to="/dialogs">Messages</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/p">Menu</NavLink>
      <NavLink to="/profile">profile</NavLink>
    </nav>
  );
};

export default Nav;
