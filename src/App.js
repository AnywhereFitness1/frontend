import React, { useState } from "react";
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
import UpdateClass from "./components/instructor/UpdateClass";
import InstructorClass from "./components/instructor/InstructorClass";
import InNavBar from "./components/instructor/InNavBar";
import AddClass from "./components/instructor/AddClass";

function App() {
  const [isAuthenticated, SetisAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );

  const setAuth = boolean => {
    SetisAuthenticated(boolean);
  };

  console.log(isAuthenticated);

  return (
    <Provider store={Store}>
      <Header />

      <InNavBar setAuth={setAuth} isAuthenticated={isAuthenticated} />

      <Switch>
        <PrivateRoute exact path="/dashboard" component={ClientDashboard} />
        <PrivateRoute
          exact
          path="/instructordashboard"
          component={InstructorDashboard}
        />
        <Route exact path="/Instructor-Class/:id" component={InstructorClass} />
        <Route exact path="/update-class/:id" component={UpdateClass} />

        <PrivateRoute exact path="/update-class" component={UpdateClass} />
        <PrivateRoute exact path="/add-class" component={AddClass} />
        <Route path="/" component={Login} />
      </Switch>
    </Provider>
  );
}

export default App;
