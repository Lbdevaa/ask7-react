/*
 * PortfolioSingle
 *
 */

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { useParams } from 'react-router-dom';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import LandingBrowser from 'components/LandingBrowser';
import { Helmet } from 'react-helmet';
import Wait from 'components/Wait';
import messages from './messages';
import Breadcrumbs from './Breadcrumbs';

export default function PortfolioSingle() {
  // The <Route> that rendered this component has a
  // path of `/topics/:slug`. The `:slug` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  // const { slug } = useParams();
  const { path } = useRouteMatch();

  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);

  React.useEffect(() => {
    setTimeout(() => setShow(!show), 200);
  }, []);

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
              <Link className="link breadcrumbs__link" to="/">
                Главная
              </Link>
              {/* <Link className="link breadcrumbs__link" to="/portfolio">
                Портфолио
              </Link> */}
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
            <CSSTransition
              in={show}
              timeout={1000}
              classNames="alert"
              unmountOnExit
              onEntered={() => setShowButton(false)}
            >
              <div>
                <LandingBrowser />
              </div>
            </CSSTransition>
            {showButton && (
              <div>
                <Wait />
              </div>
            )}
          </Container>
        </Route>
      </Switch>
    </div>
  );
}
