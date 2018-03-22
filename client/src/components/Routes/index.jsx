import {Route, Switch} from "react-router-dom";
import React from 'react'
import {Home} from "../pages/Home";

export const AuthRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
  </Switch>
)
