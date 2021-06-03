import React, { Component } from 'react';
import styled from 'styled-components';
import Bubble from '../Buble/Bubble';

const ChatboxContainer = styled.div``;

class Chatbox extends Component {
  render() {
    return (
      <ChatboxContainer>
        <Bubble content="Привет, это сайт моей студии! 🤗" />
        <Bubble content="Я занимаюсь дизайном и разработкой сайтов" />
      </ChatboxContainer>
    );
  }
}

export default Chatbox;
