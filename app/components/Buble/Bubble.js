import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BubbleBox = styled.div`
  max-width: 48rem;
  border-radius: 0 2.5rem 2.5rem 0;
  padding: 1.5rem 2.25rem;
  background: linear-gradient(135deg, #6b73ff 10%, #000dff 100%);
  line-height: 1.41;
  -webkit-box-shadow: 1px 1px 2px rgb(30 30 30 / 20%);
  box-shadow: 1px 1px 2px rgb(30 30 30 / 20%);
  border-radius: 2.5rem 2.5rem 2.5rem 0;
  color: #fff;
  line-height: 1.41;
  margin: 0 0 20px;
  width: max-content;
`;

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <BubbleBox>{this.props.content}</BubbleBox>;
  }
}
Bubble.PropTypes = {
  content: PropTypes.string,
};
Bubble.defaultProps = {
  content: 'Упс...',
};

export default Bubble;
