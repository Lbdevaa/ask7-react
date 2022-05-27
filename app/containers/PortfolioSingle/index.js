/*
 * PortfolioSingle
 *
 */

import React from 'react';
// import { useParams } from 'react-router-dom';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import LandingBrowser from 'components/LandingBrowser';
import { Helmet } from 'react-helmet';
import messages from './messages';
import Breadcrumbs from './Breadcrumbs';

export default function PortfolioSingle() {
  // The <Route> that rendered this component has a
  // path of `/topics/:slug`. The `:slug` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  // const { slug } = useParams();
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Container>
            <Helmet>
              <title>Проект</title>
              <meta name="description" content="Портфолио" />
            </Helmet>
            <Breadcrumbs>
              <Link className="link breadcrumbs__link" to="/portfolio">
                Портфолио
              </Link>
              |
              <span className="breadcrumbs__text">
                <FormattedMessage {...messages.header} />
              </span>
            </Breadcrumbs>
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
            <p>УралПолиКом - компания, делает наливные полы с 2004 года.</p>
            <p>
              Cтроительная компания с собственным производством. УралПолиКом
              занимается монтажом и продажей наливных полимерных полов.
            </p>
            <LandingBrowser />
          </Container>
        </Route>
      </Switch>
    </div>
  );
}
