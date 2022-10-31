/*
 * PortfolioSingle
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
// import { useParams } from 'react-router-dom';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

// import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import LandingBrowser from 'components/LandingBrowser';
import { Helmet } from 'react-helmet';
import Wait from 'components/Wait';
// import messages from './messages';
// import { projectsData } from 'data/projects/projectList-en';
import { projectsData } from 'data/projects/projectList';
import Breadcrumbs from './Breadcrumbs';

/**
 * Single post view (/:slug)
 * https://reactdev.ru/libs/react-router/#useparams
 *
 * This file renders a single post and loads all the content.
 *
 */

function PortfolioSingle() {
  // The <Route> that rendered this component has a
  // path of `/topics/:slug`. The `:slug` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.

  const { slug } = useParams();
  const { path } = useRouteMatch();

  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const thisProjectData = projectsData.find(project => project.id === slug);

  React.useEffect(() => {
    setTimeout(() => setShow(!show), 200);
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          {/* <Route path="/blog/:slug"> */}
          <Container>
            <Helmet>
              <title>
                Проект {thisProjectData.name} | Студия разработки сайтов
                {/* Project {thisProjectData.name} | Website development studio */}
              </title>
              <meta name="description" content="Портфолио" />
              {/* <meta name="description" content="Portfolio" /> */}
            </Helmet>
            <Breadcrumbs>
              <Link className="link breadcrumbs__link" to="/">
                Главная
                {/* Main */}
              </Link>
              |
              <Link className="link breadcrumbs__link" to="/portfolio">
                Портфолио
                {/* Portfolio */}
              </Link>
              |<span className="breadcrumbs__text">{thisProjectData.name}</span>
            </Breadcrumbs>
            <h1>{thisProjectData.name}</h1>
            <div className="text-box">
              <p>{thisProjectData.description}</p>
            </div>
            <CSSTransition
              in={show}
              timeout={1000}
              classNames="alert"
              unmountOnExit
              onEntered={() => setShowButton(false)}
            >
              <div>
                <LandingBrowser
                  alt={thisProjectData.name}
                  poster={thisProjectData ? thisProjectData.image : ''}
                  link={thisProjectData.link}
                />
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

PortfolioSingle.propTypes = {
  // title: PropTypes.string,
  // html: PropTypes.string,
  // location: PropTypes.any,
  // poster: PropTypes.string,
  // location: PropTypes.object.isRequired,
};

PortfolioSingle.defaultProps = {
  title: ' ASK',
  html: ' 7',
  location: 'site-uteh',
};

export default PortfolioSingle;
