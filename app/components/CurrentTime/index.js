import React from 'react';
import styled from 'styled-components';

const TimeBox = styled.span`
  display: inline-block;
  margin: .5rem 2.25rem;
  color: rgba(30,30,30,0.35);
  font-size: .75rem;
`;

function CurrentTime() {
  return (
    <TimeBox>
      {new Date().toLocaleTimeString().slice(0,-3)}
    </TimeBox>
  );
}

export default CurrentTime;