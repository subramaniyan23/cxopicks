import React from "react";
import AppRouter from "./routers/Router";

export const App = (props) => {
  return (
    <div>
      <AppRouter {...props} />
    </div>
  );
};
