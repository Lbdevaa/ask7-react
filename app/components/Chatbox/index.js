import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../alert.css';
import './index.sass';
import MyPhone from 'components/MyPhone';
import Bubble from '../Bubble';
import WorkList from '../WorkList';
import Message from '../Message';
import Wait from '../Wait';

const Chatbox = () => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);

  React.useEffect(() => {
    setTimeout(() => setShow(!show), 1200);
  }, []);

  return (
    <div className="chatbox">
      <CSSTransition in={show} timeout={1000} classNames="alert" unmountOnExit>
        <>
          <Message>
            <Bubble content="Привет, это сайт моей студии! 🤗" />
            <Bubble content="Разрабатываем сайты, встраиваем в систему управления и делаем дизайн" />
            <Bubble content="Вот некоторые из готовых работ" />
          </Message>
        </>
      </CSSTransition>
      <CSSTransition in={show} timeout={1000} classNames="alert" unmountOnExit>
        <>
          <Message>
            <WorkList />
          </Message>
        </>
      </CSSTransition>

      <CSSTransition
        in={show}
        timeout={1000}
        classNames="alert"
        unmountOnExit
        onEntered={() => setShowButton(false)}
      >
        <>
          <Message>
            <Bubble content={<MyPhone />} />
          </Message>
        </>
      </CSSTransition>
      {showButton && (
        <>
          <Wait />
        </>
      )}
    </div>
  );
};

export default Chatbox;
