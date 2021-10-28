/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'components/alert.css';

// import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';
import Chatbox from 'components/Chatbox';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route component={NotFoundPage} />
      </Switch>
      <Chatbox />
    </div>
  );
}
