import React, { Suspense } from 'react';
import PageContextProvider from './components/Context';

import { BrowserRouter as Router } from 'react-router-dom';

import './styles/App.scss';

import Loader from './components/Loader';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageSwitch from './components/PageSwitch';

export default function App() {
  return (
    <div className="page__wrapper">
      <PageContextProvider>
        <Router>
          <Suspense fallback={<Loader />}>
            <ScrollToTop />
            <Nav />
            <PageSwitch />
            <Footer />
          </Suspense>
        </Router>
      </PageContextProvider>
    </div>
  );
}