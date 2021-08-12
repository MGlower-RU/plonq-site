import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './styles/App.scss';

import Nav from './components/Nav';
import PageSwitch from './components/PageSwitch';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page__wrapper">
      <Router>
        <Nav />
        <PageSwitch />
        <Footer />
      </Router>
    </div>
  );
}