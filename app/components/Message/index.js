import React from 'react';
import CurrentTime from '../CurrentTime';
import './index.sass';

// function Message(props) {
function Message() {
  return (
    <div className="message">
      {/* {props.children} */}
      <CurrentTime />
    </div>
  );
}

export default Message;
