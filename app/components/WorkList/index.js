import React, { Component } from 'react';
// import styled from 'styled-components';
import WorkListItem from './worklistitem';

import './index.css'

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <WorkListItem />
        <WorkListItem />
        <WorkListItem name="Наружная реклама в Екатеринбурге" poster="https://ask7.ru/img/2.jpg" />
        <WorkListItem />
        <WorkListItem name="Заправка и ремонт картриджей" poster="https://ask7.ru/img/3.gif" />
        <WorkListItem name="Здравоохранение Тюменской области" poster="https://ask7.ru/img/5.jpg" />
      </div>
    );
  }
}
export default WorkList;
