import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

function MyPhone(){
  return(
    <Link
      href="tel:+79220256520"
    >
      Мой номер 📱 +7 (922) 0256-520
    </Link>
  )
}

export default MyPhone;