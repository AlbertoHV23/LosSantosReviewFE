import React from "react";
import "./Account.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import { Grid } from "@mui/material";
import NavbarAccount from "../../components/Account/Navbar";
import Sliderbar from "../../components/Account/Slidebar";
import ProfilePage from "../../components/Account/Profile";
import Dashboard from "../../components/Account/Dashboard";
import Security from "../../components/Account/Security";

function Account() {
  return (
    <div className="account-page">
      <Router>
        <NavbarAccount />
        <Grid container>
          <Grid item xs={12} md={2} lg={2.5}>
            <Sliderbar />
          </Grid>

          <Grid item xs={12} md={10} lg={9.5}>
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>

            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>

            <Route path="/security" exact>
              <Security />
            </Route>


          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default Account;
