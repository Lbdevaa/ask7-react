import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';
import { Link } from 'react-router-dom';

const PortfolioListItem = props => {
  const { linkTo } = props;

  return (
    <li className="portfolio-item">
      <Link className="link portfolio-item__link" to={`${linkTo}`}>
        {props.children}
      </Link>
    </li>
  );
};

PortfolioListItem.propTypes = {
  children: PropTypes.node,
  linkTo: PropTypes.string,
};

export default PortfolioListItem;
