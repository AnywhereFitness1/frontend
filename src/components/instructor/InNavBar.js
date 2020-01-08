import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";

const InNavBar = props => {
  console.log("nav props: ", props);

  const handleLogout = e => {
    e.preventDefault();
    props.setAuth(false);
    localStorage.clear("token");
  };
  return (
    <Navbar className="navBar">
      <NavbarBrand>
        <Link to="/instructordashboard">Anywhere Fittness</Link>
      </NavbarBrand>

      {props.isAuthenticated ? (
        <div className="navLinks">
          <NavLink href="/instructordashboard">Dashboard</NavLink>
          <NavLink href="/add-class">Add New Class</NavLink>
          <NavLink onClick={handleLogout}>Logout</NavLink>
        </div>
      ) : (
        <></>
      )}
    </Navbar>
  );
};

export default InNavBar;
