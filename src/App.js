import React from "react";
import { Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import Store from "./Store";

import PrivateRoute from "./PrivateRoute";
// end of Redux

// components
import Login from "./components/Login";
import ClassList from "./components/ClassList";

function App() {
  return (
    <Provider store={Store}>
      <div>Anywhere Fitness App</div>

      <Switch>
        <PrivateRoute exact path="/classes" component={ClassList} />
        <Route path="/" component={Login} />
      </Switch>
    </Provider>
  );
}

export default App;
