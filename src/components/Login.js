import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel, DropdownButton, Dropdown } from "react-bootstrap";



export default function Login(props) {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  

  function validateForm() {
    return UserName.length > 0 && password.length > 0 && department.length;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="UserName" bsSize="large">
          <FormLabel>
            UserName
            </FormLabel>
          <FormControl
            autoFocus
            type="UserName"
            value={UserName}
            onChange={e => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>
            Password
            </FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="department" bsSize="large">
          <FormLabel>
          <DropdownButton id="dropdown-basic-button" title="Department">
          <Dropdown.Item href="#/action-1">Client</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Instructor</Dropdown.Item>
          </DropdownButton>
            </FormLabel>
          <FormControl
            value={department}
            onChange={e => setDepartment(e.target.value)}
            type="department"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
    
  );
}