import React from 'react';
import './index.sass';

function Container(PropTypes) {
  return <div className="container">{PropTypes.children}</div>;
}

export default Container;
