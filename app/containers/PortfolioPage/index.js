/*
 * PortfolioPage
 *
 * List all the features
 */
import React, { useEffect, useRef } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import PortfolioPageContainer from 'components/PortfolioPageContainer';
import PortfolioSingle from 'containers/PortfolioSingle/Loadable';
// import { projectsData } from 'data/projects/projectList-en';
import { projectsData } from 'data/projects/projectList';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import PortfolioList from './PortfolioList';
import InertiaPlugin from '../../utils/libs/inert';
gsap.registerPlugin(Draggable, InertiaPlugin);

// import messages from './messages';

export default function PortfolioPage() {
  const { path } = useRouteMatch();

  const portfolioBox = useRef();
  useEffect(() => {
    gsap.to(portfolioBox.current, {
      duration: 4,
      x: 350,
    });

    Draggable.create(portfolioBox.current, {
      bounds: 'body',
      inertia: true,
    });
  });

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <PortfolioPageContainer>
            <Helmet>
              <title>
                Портфолио студии | Студия разработки сайтов Александра Худякова
                {/* Studio portfolio | Website Development Studio Alexander Khudyakov */}
              </title>
              <meta name="description" content="Портфолио" />
              {/* <meta name="description" content="Portfolio" /> */}
            </Helmet>
            <h1 className="page-title">
              {/* Portfolio */}
              Портфолио
              {/* <FormattedMessage {...messages.header} /> */}
            </h1>
            <div bounds="parent" ref={portfolioBox}>
              <div>
                <PortfolioList data={projectsData} />
              </div>
            </div>
          </PortfolioPageContainer>
        </Route>
        <Route path={`${path}/:slug`}>
          <PortfolioSingle />
        </Route>
      </Switch>
    </>
  );
}
