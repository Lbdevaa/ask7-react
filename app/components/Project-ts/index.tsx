import { projects } from 'data/projects/projects.tsx';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import './index.sass';
import Project from './worklistitem.tsx';

function WorkList() {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <div className=" work-list">
          <Link className="link" to={`${url}portfolio/site-uat1996`}>
            {projects.map(project => (
              <Project
                project={project}
                name={project.name}
                link={project.link}
                poster={project.poster}
              />
            ))}
          </Link>
        </div>
      </Route>
    </Switch>
  );
}

export default WorkList;
