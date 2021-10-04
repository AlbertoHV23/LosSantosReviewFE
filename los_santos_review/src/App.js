import React from "react";
import Login from "./pages/login/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
