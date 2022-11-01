/*
 * Wokers list page
 *
 * List all the features
 */
import React from 'react';

import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { workersData } from 'data/workers/workersList';

import WorkersPageContainer from 'components/WorkersPageContainer';
import WorkerSingle from 'containers/WorkerSingle';
import styled from 'styled-components';

import NormalImg from 'components/Img';
const Img = styled(NormalImg)``;

export default function WorkersPage() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <WorkersPageContainer>
            <Helmet>
              <title>
                Сотрудники студии | Студия разработки сайтов Александра Худякова
                {/* Studio portfolio | Website Development Studio Alexander Khudyakov */}
              </title>
              <meta name="description" content="Портфолио" />
              {/* <meta name="description" content="Portfolio" /> */}
            </Helmet>
            <h1 className="page-title">Сотрудники студии</h1>
            <ul>
              {workersData.map(({ id, avatar, name, description }) => (
                <li key="id">
                  <Link className="link" to={`${path}/${id}`}>
                    <Img
                      src={avatar || ''}
                      className="protfolio__img"
                      alt={name || 'Сотрудник'}
                    />
                  </Link>
                  <p>{name}</p>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </WorkersPageContainer>
        </Route>
        <Route path={`${path}/:slug`}>
          <WorkerSingle />
        </Route>
      </Switch>
    </div>
  );
}
