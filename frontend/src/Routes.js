import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/" exact component={Home} />
    </Switch>
  );
}