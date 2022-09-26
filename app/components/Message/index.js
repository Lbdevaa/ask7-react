import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from '../CurrentTime';
import './index.sass';

function Message(props) {
  return (
    <div className={`${props.className || ''} message`} id={PropTypes.id}>
      {props.children}
      <CurrentTime />
    </div>
  );
}

Message.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Message;
