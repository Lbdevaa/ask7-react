/*
 * PortfolioPage
 *
 * List all the features
 */
import React from 'react';

import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import NormalImg from 'components/Img';

import Container from 'components/Container';
import PortfolioSingle from 'containers/PortfolioSingle/Loadable';
import imgUteh from 'components/LandingBrowser/site-uteh.png';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

const Img = styled(NormalImg)``;

export default function PortfolioPage() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Container>
            <Helmet>
              <title>Портфолио студии</title>
              <meta name="description" content="Портфолио" />
            </Helmet>
            <div className="breadcrumbs">
              <FormattedMessage {...messages.header} />
            </div>
            <h1 className="page-title">
              <FormattedMessage {...messages.header} />
            </h1>
            <List>
              <ListItem>
                <Img src={imgUteh} className="protfolio__img" alt="" />
                <ListItemTitle>
                  <FormattedMessage {...messages.scaffoldingHeader} />
                </ListItemTitle>
                <div className="text-box">
                  <FormattedMessage {...messages.scaffoldingMessage} />
                </div>
                <Link className="link" to={`${url}site-uteh`}>
                  Посмотреть
                </Link>
              </ListItem>
            </List>
          </Container>
        </Route>
        <Route path={`${path}/:slug`}>
          <PortfolioSingle />
        </Route>
      </Switch>
    </div>
  );
}
