/*
 * PortfolioPage
 *
 * List all the features
 */
import React, { useEffect, useRef, useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import PortfolioPageContainer from 'components/PortfolioPageContainer';
import PortfolioSingle from 'containers/PortfolioSingle/Loadable';
// import { projectsData } from 'data/projects/projectList-en';
import { projectsData } from 'data/projects/projectList';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import PortfolioList from 'components/PortfolioList';
import InertiaPlugin from '../../utils/libs/inert';

gsap.registerPlugin(Draggable, InertiaPlugin);

// import messages from './messages';

export default function PortfolioPage() {
  const [loaded, setLoaded] = useState(false);
  const { path } = useRouteMatch();

  // TODO: ref
  const portfolioBox = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(min-width: 992px)').matches) {
      // Draggable.create(portfolioBox.current, {
      Draggable.create('.portfolio-list', {
        bounds: '.portfolio-page-container',
        inertia: true,
      });
    }
  });

  useEffect(() => {
    setLoaded(true);
  }, [portfolioBox]);

  return (
    <Switch>
      <Route exact path={path}>
        <PortfolioPageContainer bounds="parent">
          <Helmet>
            <title>
              Портфолио студии | Студия разработки сайтов Александра Худякова
              {/* Studio portfolio | Website Development Studio Alexander Khudyakov */}
            </title>
            <meta name="description" content="Портфолио" />
            {/* <meta name="description" content="Portfolio" /> */}
          </Helmet>
          <div className="portfolio-page-container__header">
            <h1 className="page-title">
              {/* Portfolio */}
              Портфолио
              {/* <FormattedMessage {...messages.header} /> */}
            </h1>
            <p className={`page-subtitle ${loaded && 'opacity'}`}>
              Загрузка...
            </p>
          </div>
          <PortfolioList
            data={projectsData}
            ref={portfolioBox}
            className={loaded ? 'loaded' : ''}
          />
        </PortfolioPageContainer>
      </Route>
      <Route path={`${path}/:slug`} component={PortfolioSingle} />
    </Switch>
  );
}
