import React from 'react';
import './index.sass';

function WorkersPageContainer(PropTypes) {
  return (
    <div className="workers-page-container container">{PropTypes.children}</div>
  );
}

export default WorkersPageContainer;
