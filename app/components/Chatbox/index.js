import React, { Component } from 'react';
import Bubble from '../Bubble';
import WorkList from '../WorkList';
import Message from '../Message';
import './alert.css';
import './index.css';

class Chatbox extends Component {
  render() {
    return (
      <div class="chatbox-container">
        <Message>
          <Bubble timeToShow="0.2" content="Привет, это сайт моей студии! 🤗" />
          <Bubble timeToShow="0.5" content="Я занимаюсь дизайном и разработкой сайтов" />
        </Message>
        <Message>
          <WorkList />
        </Message>
      </div>
    );
  }
}

export default Chatbox;
