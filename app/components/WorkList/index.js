import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import WorkListItem from './WorkListItem';

import './index.sass';
// eslint-disable-next-line import/order
import { projectsData } from 'data/projects/projectList';

function WorkList() {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <div className="work-list">
          {projectsData.slice(0, 6).map(({ id, poster, name }) => (
            <Link className="link" to={`${url}portfolio/${id}`} key={id}>
              <WorkListItem name={name} poster={poster} />
            </Link>
          ))}
        </div>
      </Route>
    </Switch>
  );
}

export default WorkList;
