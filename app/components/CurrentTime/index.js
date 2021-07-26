import React from 'react';

function CurrentTime() {
  return (
      new Date().toLocaleTimeString().slice(0,-3)
    );
}

export default CurrentTime;