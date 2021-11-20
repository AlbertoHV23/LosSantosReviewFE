import React from "react";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Search from "./pages/search/Search"
import Review from "./pages/review/Review";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Account from "./pages/account/Account";

import ReviewForm from "./pages/review-form/ReviewForm";
import ContentForm from "./pages/content-form/ContentForm";
import CategoryForm from "./pages/category-form/CategoryForm";
import CompanyForm from "./pages/company-form/CompanyForm";
import RoleForm from "./pages/role-form/RoleForm";
import EditCategoryForm from "./pages/edit-category/EditCategoryForm";
import EditContentForm from "./pages/edit-content/EditContentForm";

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
        <Route path="/review-form" exact>
          <ReviewForm />
        </Route>
        <Route path="/content-form" exact>
          <ContentForm />
        </Route>
        <Route path="/category-form" exact>
          <CategoryForm />
        </Route>
        <Route path="/company-form" exact>
          <CompanyForm />
        </Route>
        <Route path="/role-form" exact>
          <RoleForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
