import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import CarData from "../Pages/CarData";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/car/:carID" component={CarData} />
    </Switch>
  );
};

export default Routes;
