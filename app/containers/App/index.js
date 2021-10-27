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
import '../../styles/main.sass';

// import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';
import Chatbox from 'components/Chatbox';
import Wait from '../../components/Wait';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route component={NotFoundPage} />
      </Switch>
      <Chatbox />
      <Wait />
    </div>
  );
}
