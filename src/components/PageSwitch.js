import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';

import Main from '../pages/Main';
import Plonq500 from '../pages/Plonq500';
import ProductionOut from '../pages/ProductionOut';
import Products from '../pages/Products';
import WholesaleBuyers from '../pages/WholesaleBuyers';

export default function PageSwitch() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/application">
        <h1>Приложение</h1>
      </Route>
      <Route path="/where-to-buy">
        <h1>Где купить?</h1>
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
      <Route path="/wholesale-customers">
        <WholesaleBuyers />
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
      <Route path="/plonq400">
        <ProductionOut goTo={'Plonq 500'} />
      </Route>
      <Route path="/plonq500">
        <Plonq500 />
      </Route>
      <Route path="/page404">
        <h1>404 page</h1>
      </Route>
      <Route path="*">
        <Redirect to="page404" />
      </Route>
    </Switch>
  )
}