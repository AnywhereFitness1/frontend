import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Welcome to Anywhere Fitness App</h1>
      <Link to="instructorashboard">Instructor</Link>
    </header>
  );
}
