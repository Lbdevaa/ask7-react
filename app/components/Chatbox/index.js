import React from 'react';
import './index.sass';
import MyPhone from 'components/MyPhone';
import Bubble from '../Bubble';
import WorkList from '../WorkList';
import Message from '../Message';

function Chatbox() {
  return (
    <div className="chatbox">
      <Message id="bubble-1">
        <Bubble content="Привет, это сайт моей студии! 🤗" />
        <Bubble content="Я занимаюсь дизайном и разработкой сайтов" />
      </Message>
      <Message id="bubble-2">
        <WorkList />
      </Message>
      <Message id="bubble-3">
        <Bubble content={<MyPhone />} />
      </Message>
    </div>
  );
}

export default Chatbox;
