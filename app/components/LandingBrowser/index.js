import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';
import styled from 'styled-components';
import NormalImg from 'components/Img';
import browserTop from './browser-top.png';
// import utehImg from './site-uteh.png';
const Img = styled(NormalImg)``;

function LandingBrowser(props) {
  return (
    <div className="landing-browser">
      <div className="landing-browser__top">
        <Img src={browserTop} alt="" />
        <a href={props.link} target="blank" className="landing-browser__link">
          {props.link}
        </a>
      </div>
      <div className="landing-browser__content">
        <Img src={props.poster} alt={props.name} />
      </div>
    </div>
  );
}

LandingBrowser.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  poster: PropTypes.string,
};

LandingBrowser.defaultProps = {
  // link: 'http://uteh.ru/',
  // name: 'Строительная полимерная компания',
  // poster: utehImg,
};

export default LandingBrowser;
