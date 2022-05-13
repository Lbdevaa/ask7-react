/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

function Img(props) {
  return (
    <picture className="picture">
      <source src={props.src} type="image/svg+xml" />
      <img
        className={`${props.className} picture__img`}
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
    </picture>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
