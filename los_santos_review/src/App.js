import React from "react";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Search from "./pages/search/Search"
import Review from "./pages/review/Review";
import ReviewForm from "./pages/review-form/Review-form";
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
        <Route path="/review-form" exact>
          <ReviewForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
