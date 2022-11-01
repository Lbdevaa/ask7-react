/*
 * WokerSingle
 *
 */
import React from 'react';

import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
// import NormalImg from 'components/Img';

// const Img = styled(NormalImg)``;
import { workersData } from 'data/workers/workersList';

export default function WorkerSingle() {
  const { slug } = useParams();
  const { path } = useRouteMatch();

  const thisWorkerData = workersData.find(worker => worker.id === slug);

  return (
    <div className="container">
      <Switch>
        <Route exact path={path}>
          <Helmet>
            <title>
              Сотрудник студии - {path} | Студия разработки сайтов Александра
              Худякова
            </title>
            <meta name="description" content="Портфолио" />
          </Helmet>
          <Link className="link breadcrumbs__link" to="/">
            Главная
          </Link>
          <h1 className="page-title">Сотрудник {thisWorkerData.name}</h1>
        </Route>
        <Route path={`${path}/:slug`}>
          <p>Сотрудник</p>
        </Route>
      </Switch>
    </div>
  );
}
