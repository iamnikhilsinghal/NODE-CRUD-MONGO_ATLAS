import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="">List</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="materialForm">
                  Material Form
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">
                  Link
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => onSearch(e)}
              />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
