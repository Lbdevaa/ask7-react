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

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';
import Chatbox from 'components/Chatbox';
import GlobalStyle from '../../global-styles';
import WorkList from '../../components/WorkList';
import Wait from '../../components/Wait';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <Header />
      <Chatbox />
      <Wait />
      <WorkList />
    </div>
  );
}
