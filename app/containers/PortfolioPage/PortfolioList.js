// import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
// import Img from 'components/Img';
import Img from 'components/Img';
import PortfolioListItem from './PortfolioListItem';

import './portfolio-list.css';

const PortfolioList = props => {
  const dataProject = props.data;

  return (
    <ul className="portfolio-list">
      {dataProject.map(item => (
        <PortfolioListItem key={item.id}>
          <Img
            src={item.poster || ''}
            className="portfolio-item__img"
            alt={item.name || 'Проект'}
          />
        </PortfolioListItem>
      ))}
    </ul>
  );
};

PortfolioList.propTypes = {
  data: PropTypes.array,
};

export default PortfolioList;

//  {item.id}
//  <Link className="link" to={`${url}/${id}`}>
//  <Img
//     src={item.poster || ''}
//     className="protfolio__img"
//     alt={item.name || 'Проект'}
//   />
//  </Link>
//  <Link className="link" to={`${url}/${id}`}>
//     <ListItemTitle>{name}</ListItemTitle>
//   </Link>
//   <div className="text-box">
//     <p>{description}</p>
//   </div>
//   <Link className="link" to={`${url}/${id}`}>
//     Посмотреть
//   </Link>
