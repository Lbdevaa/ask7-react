import React from 'react';
import CurrentTime from '../CurrentTime';
import './index.sass';

function Message(PropTypes) {
  return (
    <div className="message" id={PropTypes.id}>
      {PropTypes.children}
      <CurrentTime />
    </div>
  );
}

export default Message;
