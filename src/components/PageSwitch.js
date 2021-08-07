import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function PageSwitch() {
  return (
    <Switch>
      <Route path="/products">
        {/* <About /> */}
      </Route>
      <Route path="/application">
        {/* <Topics /> */}
      </Route>
      <Route path="/distribution">
        {/* <Home /> */}
      </Route>
    </Switch>
  )
}