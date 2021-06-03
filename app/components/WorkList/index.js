import React, { Component } from 'react';
import styled from 'styled-components';
import WorkListItem from './worklistitem';

const Container = styled.div``;

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <WorkListItem />
      </Container>
    );
  }
}
export default WorkList;
