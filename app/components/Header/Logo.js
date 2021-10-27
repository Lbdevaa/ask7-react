import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

function Logo(props) {
  return (
    <div className="logo__container">
      <span className="logo__text">{props.content}</span>
      <span className="logo__num">{props.contentSpan}</span>
    </div>
  );
}

Logo.propTypes = {
  content: PropTypes.string,
  contentSpan: PropTypes.string,
};

Logo.defaultProps = {
  content: 'ASK',
  contentSpan: '7',
};

export default Logo;
