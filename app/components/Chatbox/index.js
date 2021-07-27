import React, { Component } from 'react';
import styled from 'styled-components';
import Bubble from '../Bubble/Bubble';
import WorkList from '../WorkList';
import MyPhone from '../MyPhone';
import Message from '../Message';

const ChatboxContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  `;
// Message = styled.div`
  //   margin-bottom: 20px;
  // `;

class Chatbox extends Component {
  render() {
    return (
      <ChatboxContainer>

        <Message>
          <Bubble timeToShow="0.2" content="Привет, это сайт моей студии! 🤗" />
          <Bubble timeToShow="0.5" content="Я занимаюсь дизайном и разработкой сайтов" />
        </Message>

        <Message>
          <WorkList />
        </Message>

        <Message>
          <Bubble content={<MyPhone />} />
        </Message>
        <Message  isGuest="true">
          <Bubble content="Показажи больше проектов" />
        </Message>


      </ChatboxContainer>
    );
  }
}

export default Chatbox;