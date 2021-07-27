import React, { Component } from 'react';
import styled from 'styled-components';
import WorkListItem from './worklistitem';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  max-width: 1200px;
  border-radius: 2.5rem;
  overflow: hidden;
`;

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <WorkListItem  />
        <WorkListItem  />
        <WorkListItem name="Наружная реклама в Екатеринбурге" poster="https://ask7.ru/img/2.jpg" />
        <WorkListItem  />
        <WorkListItem name="Заправка и ремонт картриджей" poster="https://ask7.ru/img/3.gif" />
        <WorkListItem name="Здравоохранение Тюменской области" poster="https://ask7.ru/img/5.jpg" />
      </Container>
    );
  }
}
export default WorkList;
