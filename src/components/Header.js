import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

import PrivateRoute from "../authentication/PrivateRoute";
// export default function Header() {
//   return (
//     <header className="header" style={{ marginBottom: "2rem" }}>
//       <h1>Welcome to Anywhere Fitness App</h1>
//     </header>
//   );
// }
import Login from "./Login";

import ClNavBar from "./client/ClNavBar";
import InNavBar from "./instructor/InNavBar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: localStorage.getItem("department")
      // department: ""
    };
  }
  // componentDidMount() {
  //   if (localStorage.getItem("token")) {
  //     Auth.authenticate();
  //   }
  // }

  // async componentDidMount() {
  //   const response = await localStorage.getItem("department");
  //   console.log("componedi token: ", response);

  //   this.setState({
  //     department: response
  //   });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.department !== this.state.department) {
  //     console.log("the department token change: ", this.state.department);
  //   }
  // }

  handleLogout = e => {
    e.preventDefault();
    this.props.setAuth(false);
    localStorage.clear("token");
    localStorage.clear("user");
    localStorage.clear("department");

    this.setState({
      department: ""
    });
  };

  render() {
    console.log("header.js: ", this.state.department);
    if (this.state.department === "client") {
      return (
        <header className="header" style={{ marginBottom: "2rem" }}>
          <section className="headerTop">
            <div>
              <h1>{localStorage.getItem("user")}</h1>
              <h2>We at Anywhere Fitness Love to have as a student</h2>
            </div>
            <button
              onClick={this.handleLogout}
              style={{ color: "red" }}
              className="btn-logout"
            >
              Logout
            </button>
          </section>
          <PrivateRoute component={ClNavBar} />
        </header>
      );
    } else if (this.state.department === "instructor") {
      return (
        <header className="header" style={{ marginBottom: "2rem" }}>
          <section className="headerTop">
            <div>
              <h1>{localStorage.getItem("user")}</h1>
              <h2>We at Anywhere Fitness Love to have as an Instructor</h2>
            </div>
            <button
              onClick={this.handleLogout}
              style={{ color: "red" }}
              className="btn-logout"
            >
              Logout
            </button>
          </section>
          <PrivateRoute component={InNavBar} />
        </header>
      );
    } else {
      return (
        <header className="header" style={{ marginBottom: "2rem" }}>
          <h1>Welcome to Anywhere Fitness App</h1>
          {/* <Link to="/login">Login</Link> */}
          <Redirect to="/login" />
        </header>
      );
    }
  }
}

export default Header;
