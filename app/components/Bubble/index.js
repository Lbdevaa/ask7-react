import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

function Bubble(props) {
  return <div className="bubble-box">{props.content}</div>;
}

Bubble.propTypes = {
  content: PropTypes.string,
};
Bubble.defaultProps = {
  content: 'Хм... Сейчас что-нибудь придумаем.',
};

export default Bubble;
