import React from "react";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import { Provider } from "react-redux";
import Store from "./Store";

import PrivateRoute from "./PrivateRoute";
// end of Redux

// components
import Home from "./components/Home";
import Login from "./components/Login";
import ClientDashboard from "./components/client/ClientDashboard";
import InstructorDashboard from "./components/instructor/InstructorDashboard";

function App() {
  return (
    <Provider store={Store}>
      <Home />

      <Switch>
        <PrivateRoute exact path="/dashboard" component={ClientDashboard} />
        <PrivateRoute
          exact
          path="/instructordashboard"
          component={InstructorDashboard}
        />
        <Route path="/" component={Login} />
      </Switch>
    </Provider>
  );
}

export default App;
