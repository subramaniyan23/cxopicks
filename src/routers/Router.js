import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import RTHandler from "./RTHandler";
import Profile from "../modules/Profile/Profile";

/**
 * Parent App component with routing
 */
const AppRoute = () => {
  return (
    <Router basename="/">
        <RTHandler
          exact
          path="/profile"
          component={Profile}
        />
        <RTHandler
          exact
          path="/"
          component={Profile}
        />
    </Router>
  );
};

export default AppRoute;
