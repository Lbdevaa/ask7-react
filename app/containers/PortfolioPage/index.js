/*
 * PortfolioPage
 *
 * List all the features
 */
import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import styled from 'styled-components';
// import NormalImg from 'components/Img';

import PortfolioPageContainer from 'components/PortfolioPageContainer';
import PortfolioSingle from 'containers/PortfolioSingle/Loadable';
// import { projectsData } from 'data/projects/projectList-en';
import { projectsData } from 'data/projects/projectList';
import Draggable from 'react-draggable';
import PortfolioList from './PortfolioList';
// import messages from './messages';

export default function PortfolioPage() {
  const { path } = useRouteMatch();

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
            <Draggable bounds="parent">
              <div>
                <PortfolioList data={projectsData} />
              </div>
            </Draggable>
          </PortfolioPageContainer>
        </Route>
        <Route path={`${path}/:slug`}>
          <PortfolioSingle />
        </Route>
      </Switch>
    </>
  );
}
