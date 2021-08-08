import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function PageSwitch() {
  return (
    <Switch>
      <Route path="/products">
        <h1>Продукты</h1>
      </Route>
      <Route path="/application">
        <h1>Приложение</h1>
      </Route>
      <Route path="/where-to-buy">
        <h1>Где купить?</h1>
      </Route>
    </Switch>
  )
}