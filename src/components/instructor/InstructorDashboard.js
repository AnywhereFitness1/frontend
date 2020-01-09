import React, { Component } from "react";
import ClassList from "./InstructorClassList";

class InstructorDashboard extends Component {
  render() {
    return (
      <main>
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
          {localStorage.getItem("user")}
        </h1>
        <h1 className="primaryHeading">My Dashboard</h1>
        <ClassList />
      </main>
    );
  }
}

export default InstructorDashboard;
