import React, { useEffect } from "react";
import { HashRouter, Redirect,Switch, Route } from "react-router-dom";
// layouts
import HomePageLayout from "../layouts/HomePageLayout";
// pages
import Homepage from "../pages/Homepage";
import Memo from "../pages/Memo";
import User from "../pages/Users";

const App = props => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePageLayout>
              <User />
            </HomePageLayout>
          )}
        />
        <Route
          exact
          path="/memo"
          render={() => (
            <HomePageLayout>
              <Memo />
            </HomePageLayout>
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default App;
