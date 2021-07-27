import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BubbleBox = styled.div`
  max-width: 48rem;
  width: max-content;
  padding: 1.5rem 2.25rem;
  background: linear-gradient(135deg, #6b73ff 10%, #000dff 100%);
  line-height: 1.41;
  box-shadow: 1px 1px 2px rgb(30 30 30 / 20%);
  border-radius: 2.5rem 2.5rem 2.5rem 0;
  color: #fff;
  margin: 0 0 5px;
  font-size: 1.4rem;
  &:last-of-type {
    border-radius: 0 2.5rem 2.5rem 2.5rem;
  }
  &:only-of-type {
    border-radius: 2.5rem;
  }
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
Bubble.propTypes = {
  content: PropTypes.string,
  timeToShow: PropTypes.number,
};
Bubble.defaultProps = {
  content: 'Хм... Сейчас что-нибудь придумаем.',
  timeToShow: '0.3',
};

export default Bubble;
