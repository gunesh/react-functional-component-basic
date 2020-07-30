import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// layouts
import HomePageLayout from "../layouts/HomePageLayout";
// pages
import Homepage from "../pages/Homepage";
import Memo from "../pages/Memo";
import User from "../pages/Users";

const App = props => {
  return (
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
        path="memo"
        render={() => (
          <HomePageLayout>
            <Memo />
          </HomePageLayout>
        )}
      />
    </Switch>
  );
};

export default App;
