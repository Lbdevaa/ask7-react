import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

function Logo(props) {
  return (
    <a href="/" className="logo__container">
      {props.content}
      <span className="logo__num">{props.contentSpan}</span>
    </a>
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
