import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import WorkListItem from './WorkListItem';
import logoUteh from '../../images/works/uteh.jpg';
import logoLight from '../../images/works/light.jpg';
import logoPrinter from '../../images/works/printer.gif';
import logoUrist from '../../images/works/urist.jpg';
import logoMed from '../../images/works/med.jpg';
import logoUat from '../../images/works/uat.jpg';

import './index.sass';

function WorkList() {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <div className=" work-list">
          <Link className="link" to={`${url}portfolio/site-uteh`}>
            <WorkListItem
              name="Строительная полимерная компания"
              poster={logoUteh}
            />
          </Link>
          <Link className="link" to={`${url}portfolio/site-lightnr`}>
            <WorkListItem
              link="https://lightnr.ru/"
              name="Наружная реклама в Екатеринбурге"
              poster={logoLight}
            />
          </Link>
          <Link className="link" to={`${url}portfolio/site-skynet-print`}>
            <WorkListItem
              link="http://skynet-print.ru/"
              name="Заправка и ремонт картриджей"
              poster={logoPrinter}
            />
          </Link>
          <Link className="link" to={`${url}portfolio/site-sm-profit`}>
            <WorkListItem
              link="http://sm-profit.ru/"
              name="Инвестиционная компания"
              poster={logoUrist}
            />
          </Link>
          <Link className="link" to={`${url}portfolio/site-medinfo72`}>
            <WorkListItem
              link="https://www.medinfo72.ru/"
              name="Здравоохранение Тюменской области"
              poster={logoMed}
            />
          </Link>
          <Link className="link" to={`${url}portfolio/site-uat1996`}>
            <WorkListItem
              link="https://www.uat1996.ru/"
              name="Уральская Ассоциация Туризма"
              poster={logoUat}
            />
          </Link>
        </div>
      </Route>
    </Switch>
  );
}

export default WorkList;
