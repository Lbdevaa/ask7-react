import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.sass';

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="bubble-box">{this.props.content}</div>;
  }
}
Bubble.propTypes = {
  content: PropTypes.string,
};
Bubble.defaultProps = {
  content: 'Хм... Сейчас что-нибудь придумаем.',
};

export default Bubble;
