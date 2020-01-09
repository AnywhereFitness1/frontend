import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";

const InNavBar = props => {
  const handleLogout = e => {
    e.preventDefault();
    props.setAuth(false);
    localStorage.clear("token");
  };

  return (
    <Navbar className="navBar">
      <Link to="/instructordashboard">Anywhere Fittness</Link>

      {props.isAuthenticated ? (
        <div className="navLinks">
          <NavLink href="/instructordashboard">Dashboard</NavLink>
          <NavLink href="/add-class">Add New Class</NavLink>
          <NavLink onClick={handleLogout}>Logout</NavLink>
        </div>
      ) : (
        <NavLink href="/">Login</NavLink>
      )}
    </Navbar>
  );
};

export default InNavBar;
