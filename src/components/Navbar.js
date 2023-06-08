import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "red",
        color: "white",
      }}
    >
      <Link to="/">
        <div>Logo</div>
      </Link>

      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/pets">
        <div>Pets</div>
      </NavLink>
      <NavLink to="/about">
        <div>About</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
