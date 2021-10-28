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
    <div className="container work-list">
      <WorkListItem link="https://uteh.ru/" name="Строительная полимерная компания" poster={logoUteh} />
      <WorkListItem link="https://lightnr.ru/"
        name="Наружная реклама в Екатеринбурге"
        poster={logoLight}
      />
      <WorkListItem link="http://skynet-print.ru/" name="Заправка и ремонт картриджей" poster={logoPrinter} />
      <WorkListItem link="http://sm-profit.ru/" name="Инвестиционная компания" poster={logoUrist} />
      <WorkListItem link="https://www.medinfo72.ru/" name="Здравоохранение Тюменской области" poster={logoMed} />
      <WorkListItem link="https://www.uat1996.ru/" name="Уральская Ассоциация Туризма" poster={logoUat} />
    </div>
  );
}

export default WorkList;
