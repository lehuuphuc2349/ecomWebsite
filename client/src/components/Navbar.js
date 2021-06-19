import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="navbar-logo">
        HappyShopping
      </a>
      <div className="navbar-search">
        <div className="search-left">
          ALL{" "}
          <span>
            <i class="fas fa-sort-down"></i>
          </span>
          <div className="search-left-dopdown">
            <select
              name=""
              id="searchDropdownLeft"
              className="searchLeft-select"
            >
              <option selected="selected" value="">
                All Departments
              </option>
              <option value="">Arts & Crafts</option>
              <option value="">Books</option>
              <option value="">Computer</option>
            </select>
          </div>
        </div>
        <input placeholder="Search item" type="text" className="search-box" />
        <div className="search-right">
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a href="" className="navbar-link">
            Login
          </a>
        </li>
        <li className="navbar-item">
          <a href="" className="navbar-link">
            Register
          </a>
        </li>
        <li className="navbar-item">
          <a href="" className="navbar-link">
            <i class="fas fa-shopping-cart">(0)</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
