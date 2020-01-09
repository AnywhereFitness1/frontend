import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavLink } from "reactstrap";

const ClNavBar = props => {
  const handleLogout = e => {
    e.preventDefault();
    props.setAuth(false);
    localStorage.clear("token");
    localStorage.clear("user");
  };

  return (
    <Navbar className="navBar">
      <Link to="/dashboard">Client Anywhere Fitness</Link>

      {props.isAuthenticated ? (
        <div className="navLinks">
          <NavLink href="/dashboard">Client Dashboard</NavLink>
          <NavLink href="/Reserved-Class/">My Reservations</NavLink>
          <NavLink onClick={handleLogout}>Logout</NavLink>
        </div>
      ) : (
        <NavLink href="/">Login</NavLink>
      )}
    </Navbar>
  );
};

export default ClNavBar;
