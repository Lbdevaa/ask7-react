import React from 'react';
import './index.sass';

function MyPhone() {
  return (
    <a className="phone-link" href="tel:+79220256520">
      {/* Мой номер{' '} */}
      My number{' '}
      <span aria-label="phone" role="img">
        📱
      </span>{' '}
      +7 (922) 0256-520
    </a>
  );
}

export default MyPhone;
