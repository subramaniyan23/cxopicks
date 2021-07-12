import React from "react";
import { Route } from "react-router-dom";
import CommonLayout from "../components/Layout/index";

const RTHandler = ({
  component: Component,
  ...params
}) => (
  <Route
    {...params}
    render={(props) =>
      <CommonLayout {...props}>
        <Component {...props} {...params} />
      </CommonLayout>
    }
  />
);

export default RTHandler;