import React from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle />       
        <Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;