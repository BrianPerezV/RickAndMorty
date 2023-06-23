import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav({ onSearch }) {
  return (
    <div class="nav">
      <Link to="/">
        <h1>LogOut</h1>
      </Link>
      <Link to="/about">
        <h1>About</h1>
      </Link>
      <Link to={"/home"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/home"}>
        <h1>Home</h1>
      </Link>
      

      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
