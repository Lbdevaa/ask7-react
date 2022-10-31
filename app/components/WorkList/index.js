import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
// import { projectsData } from 'data/projects/projectList-en';
import { projectsData } from 'data/projects/projectList';
import WorkListItem from './WorkListItem';

import './index.sass';

function WorkList() {
  const { path, url } = useRouteMatch();
  const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  let randomProject = [];
  while (randomProject.length !== 6) {
    const index = getRandomInt(projectsData.length);
    randomProject.push(projectsData[index]);
    randomProject = randomProject.filter((v, i, arr) => arr.indexOf(v) === i);
  }

  return (
    <Switch>
      <Route exact path={path}>
        <div className="work-list">
          {randomProject.map(({ id, poster, name }) => (
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
