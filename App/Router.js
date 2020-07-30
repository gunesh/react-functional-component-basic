import React, { useEffect } from "react";
import { HashRouter, Redirect,Switch, Route } from "react-router-dom";
// layouts
import HomePageLayout from "../layouts/HomePageLayout";
import ErrorPageLayout from "../layouts/ErrorPageLayout";

// pages
import Homepage from "../pages/Homepage";
import Memo from "../pages/Memo";
import Others from "../pages/Others";
import User from "../pages/Users";
import NotFound from "../pages/NotFound";


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
          path="/home"
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
        <Route
          exact
          path="/others"
          render={() => (
            <HomePageLayout>
              <Others />
            </HomePageLayout>
          )}
        />
        <Route
          exact
          path="*"
          render={() => (
            <ErrorPageLayout>
              <NotFound />
            </ErrorPageLayout>
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default App;
