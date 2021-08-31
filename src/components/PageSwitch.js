import React, { lazy } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Page404 from '../pages/Page404';

const Application = lazy(() => import('../pages/Application'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const Main = lazy(() => import('../pages/Main'));
const Plonq500 = lazy(() => import('../pages/Plonq500'));
const ProductionOut = lazy(() => import('../pages/ProductionOut'));
const Products = lazy(() => import('../pages/Products'));
const WholesaleBuyers = lazy(() => import('../pages/WholesaleBuyers'));

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
        <Application />
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
      <Route path="/wholesale-customers">
        <WholesaleBuyers />
      </Route>
      <Route path="/plonq400">
        <ProductionOut goTo={'Plonq 500'} />
      </Route>
      <Route path="/plonq500">
        <Plonq500 />
      </Route>
      <Route path="/page404">
        <Page404 />
      </Route>
      <Route path="*">
        <Redirect to="page404" />
      </Route>
    </Switch>
  )
}