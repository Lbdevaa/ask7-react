import React from 'react';
import './index.sass';

function MyPhone() {
  return (
    <a className="link" href="tel:+79220256520">
      Мой номер{' '}
      <span aria-label="phone" role="img">
        📱
      </span>{' '}
      +7 (922) 0256-520
    </a>
  );
}

export default MyPhone;
