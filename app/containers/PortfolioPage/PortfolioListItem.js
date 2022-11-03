import React from 'react';
import PropTypes from 'prop-types';

const PortfolioListItem = props => (
  <li className="portfolio-item">{props.children}</li>
);

PortfolioListItem.propTypes = {
  children: PropTypes.node,
};

export default PortfolioListItem;
