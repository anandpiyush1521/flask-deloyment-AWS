import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          <h1>
            <u>PAYERUP INDIA</u>
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <h4> Home</h4> <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <h4>About</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <h4>Contact</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/information">
                <h4>Information</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <h4>Search</h4>
              </Link>
            </li>
          </ul>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Select language
            </button>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
