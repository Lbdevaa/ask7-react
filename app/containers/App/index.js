/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'components/alert.css';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';

import Header from 'components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}
