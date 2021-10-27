import React from 'react';
import './index.sass';

function CurrentTime() {
  return (
    <span className="time">{new Date().toLocaleTimeString().slice(0, -3)}</span>
  );
}

export default CurrentTime;
