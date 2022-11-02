import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

function Breadcrumbs(props) {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__content">{props.children}</div>
    </div>
  );
}

Breadcrumbs.propTypes = {
  children: PropTypes.any,
};

export default Breadcrumbs;
