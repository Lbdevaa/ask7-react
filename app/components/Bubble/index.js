import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

function Bubble(props) {
  return (
    <div className="bubble">
      <div className="bubble__content">
        <p>{props.text || ''}</p>
        {props.children}
      </div>
    </div>
  );
}

Bubble.propTypes = {
  text: PropTypes.any,
  children: PropTypes.any,
};

export default Bubble;
