import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 300px;
  position: relative;
  -webkit-filter: saturate(80%) brightness(80%);
  filter: saturate(80%) brightness(80%);
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
`;

function WorkListItem(props) {
  return (
    <div className="item">
      <div className="link" href="##">
        <Img src={props.poster} alt={props.name} loading="lazy" />
        <p className="name">{props.name}</p>
      </div>
    </div>
  );
}

WorkListItem.propTypes = {
  name: PropTypes.string,
  poster: PropTypes.string,
};

WorkListItem.defaultProps = {
  name: 'Строительная полимерная компания',
  poster: 'https://source.unsplash.com/random',
};

export default WorkListItem;
