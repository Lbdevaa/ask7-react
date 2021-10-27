import React from 'react';
import WorkListItem from './WorkListItem';
import logoUteh from '../../images/works/uteh.jpg';
import logoLight from '../../images/works/light.jpg';
import logoPrinter from '../../images/works/printer.gif';
import logoUrist from '../../images/works/urist.jpg';
import logoMed from '../../images/works/med.jpg';
import logoUat from '../../images/works/uat.jpg';

import './index.sass';

function WorkList() {
  return (
    <div className="container">
      <WorkListItem name="Строительная полимерная компания" poster={logoUteh} />
      <WorkListItem
        name="Наружная реклама в Екатеринбурге"
        poster={logoLight}
      />
      <WorkListItem name="Заправка и ремонт картриджей" poster={logoPrinter} />
      <WorkListItem name="Инвестиционная компания" poster={logoUrist} />
      <WorkListItem name="Здравоохранение Тюменской области" poster={logoMed} />
      <WorkListItem name="Уральская Ассоциация Туризма" poster={logoUat} />
    </div>
  );
}

export default WorkList;
