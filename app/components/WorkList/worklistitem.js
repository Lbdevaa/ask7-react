import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NormalImg from 'components/Img';

const Img = styled(NormalImg)``;

function WorkListItem(props) {
  return (
    <div className="work">
      <Img
        src={props.poster}
        alt={props.name}
        loading="lazy"
        className="work__picture"
      />
      <p className="work__name">{props.name}</p>
    </div>
  );
}

WorkListItem.propTypes = {
  // link: PropTypes.string,
  name: PropTypes.string,
  poster: PropTypes.string,
};

WorkListItem.defaultProps = {
  // link: 'ya.ru',
  name: 'Строительная полимерная компания',
  poster: 'https://source.unsplash.com/random',
};

export default WorkListItem;
