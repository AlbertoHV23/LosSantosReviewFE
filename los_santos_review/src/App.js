import React from "react";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Search from "./pages/search/Search"
import Review from "./pages/review/Review";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Account from "./pages/account/Account";


function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/main" exact>
          <Main />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/myaccount" exact>
          <Account />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
