/*
 * PortfolioPage
 *
 * List all the features
 */
import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import NormalImg from 'components/Img';

import PortfolioPageContainer from 'components/PortfolioPageContainer';
import PortfolioSingle from 'containers/PortfolioSingle/Loadable';
// import { projectsData } from 'data/projects/projectList-en';
import { projectsData } from 'data/projects/projectList';
// import messages from './messages';
// import Draggable from 'react-draggable';
import List from './List';
import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';

const Img = styled(NormalImg)``;

export default function PortfolioPage() {
  const { path } = useRouteMatch();

  return (
    <div>
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
            {/* <Draggable> */}
            <List>
              {projectsData.map(({ id, poster, name }) => (
                <ListItem key={id}>
                  {/* <Link className="link" to={`${url}/${id}`}> */}
                  <Img
                    src={poster || ''}
                    className="protfolio__img"
                    alt={name || 'Проект'}
                  />
                  {/* </Link> */}
                  {/* <Link className="link" to={`${url}/${id}`}>
                      <ListItemTitle>{name}</ListItemTitle>
                    </Link>
                    <div className="text-box">
                      <p>{description}</p>
                    </div>
                    <Link className="link" to={`${url}/${id}`}>
                      Посмотреть
                    </Link> */}
                </ListItem>
              ))}
            </List>
            {/* </Draggable> */}
          </PortfolioPageContainer>
        </Route>
        <Route path={`${path}/:slug`}>
          <PortfolioSingle />
        </Route>
      </Switch>
    </div>
  );
}
