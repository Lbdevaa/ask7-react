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

// import WorkersPage from 'containers/WorkersPage';

export default function App() {
  // const { pathname } = useLocation();
  return (
    <Router>
      <Switch>
        {/* <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        {/* <Route path="/workers" component={WorkersPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
