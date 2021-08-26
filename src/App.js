import React from 'react';
import PageContextProvider from './components/Context';

import { BrowserRouter as Router } from 'react-router-dom';

import './styles/App.scss';

import Nav from './components/Nav';
import PageSwitch from './components/PageSwitch';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page__wrapper">
      <PageContextProvider>
        <Router>
          <Nav />
          <PageSwitch />
          <Footer />
        </Router>
      </PageContextProvider>
    </div>
  );
}