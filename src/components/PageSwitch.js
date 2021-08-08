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
      <Route path="/contact-us">
        <h1>Связаться с нами</h1>
      </Route>
      <Route path="/wholesale-customers">
        <h1>Оптовым покупателям</h1>
      </Route>
      <Route path="/refund">
        <h1>Условия возврата</h1>
      </Route>
      <Route path="/company">
        <h1>О компании</h1>
      </Route>
      <Route path="/policy">
        <h1>Политика конфиденциальности</h1>
      </Route>
      <Route path="/">
        <h1>Главная</h1>
      </Route>
    </Switch>
  )
}