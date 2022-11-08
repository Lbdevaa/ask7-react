import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import { useRouteMatch } from 'react-router-dom';
import PortfolioListItem from '../PortfolioListItem';
import './index.sass';

const PortfolioList = props => {
  const { url } = useRouteMatch();
  const dataProject = props.data;
  const { className, ref } = props;

  return (
    <ul className={`portfolio-list ${className}`} ref={ref}>
      {dataProject.map(item => (
        <PortfolioListItem key={item.id} linkTo={`${url}/${item.id}`}>
          <Img
            src={item.image || ''}
            className="portfolio-item__img"
            alt={item.name || 'Проект'}
          />
          <div className="portfolio-item__content">
            <h2 className="portfolio-item__title">{item.name}</h2>
            <div className="portfolio-item__text-box text-box">
              <p>{item.description}</p>
            </div>
          </div>
        </PortfolioListItem>
      ))}
    </ul>
  );
};

PortfolioList.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  ref: PropTypes.any,
};

export default PortfolioList;

//  {item.id}
//  <Link className="link" to={`${url}/${id}`}>
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
