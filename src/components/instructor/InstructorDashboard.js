import React, { Component } from "react";
import ClassList from "./InstructorClassList";

class InstructorDashboard extends Component {
  render() {
    return (
      <main>
        Insturctor Dashboard
        <ClassList />
      </main>
    );
  }
}

export default InstructorDashboard;
