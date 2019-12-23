import React from "react";
import { Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import Store from "./Store";

// end of Redux

import DemoData from "./components/DemoData";

function App() {
  return (
    <Provider store={Store}>
      <div>Anywhere Fitness App</div>
      <DemoData />
    </Provider>
  );
}

export default App;
