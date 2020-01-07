import React from "react";
import { Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import Store from "./Store";

import PrivateRoute from "./PrivateRoute";
// end of Redux

// components
import Header from "./components/Header";
import Login from "./components/Login";
import ClientDashboard from "./components/client/ClientDashboard";
import InstructorDashboard from "./components/instructor/InstructorDashboard";

function App() {
  return (
    <Provider store={Store}>
      <Header />

      <Switch>
        <PrivateRoute exact path="/dashboard" component={ClientDashboard} />
        <PrivateRoute
          exact
          path="/instructorashboard"
          component={InstructorDashboard}
        />
        <Route path="/" component={Login} />
      </Switch>
    </Provider>
  );
}

export default App;
