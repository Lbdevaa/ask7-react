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
import { projectsData } from 'data/projects/projectList';
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
              <title>
                Портфолио студии | Студия разработки сайтов Александра Худякова
              </title>
              <meta name="description" content="Портфолио" />
            </Helmet>
            <h1 className="page-title">
              <FormattedMessage {...messages.header} />
            </h1>
            <List>
              {projectsData
                .slice(0, 6)
                .map(({ id, poster, name, description }) => (
                  <ListItem key={id}>
                    <Img
                      src={poster || ''}
                      className="protfolio__img"
                      alt={name || 'Проект'}
                    />
                    <ListItemTitle>{name}</ListItemTitle>
                    <div className="text-box">
                      <p>{description}</p>
                    </div>
                    <Link className="link" to={`${url}/${id}`}>
                      Посмотреть
                    </Link>
                  </ListItem>
                ))}
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
