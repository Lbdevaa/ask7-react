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
    setShow(!show);
  }, []);

  return (
    <div className="chatbox">
      <CSSTransition in={show} timeout={1000} classNames="alert" unmountOnExit>
        <div>
          <Message>
            <Bubble content="Привет, это сайт моей студии! 🤗" />
            <Bubble content="Я занимаюсь дизайном и разработкой сайтов" />
          </Message>
        </div>
      </CSSTransition>
      <CSSTransition in={show} timeout={1000} classNames="alert" unmountOnExit>
        <div>
          <Message>
            <WorkList />
          </Message>
        </div>
      </CSSTransition>
      <CSSTransition
        in={show}
        timeout={1000}
        classNames="alert"
        unmountOnExit
        onEntered={() => setShowButton(false)}
      >
        <div>
          <Message>
            <Bubble content={<MyPhone />} />
          </Message>
          <Message>
            <Bubble content={<a href="/portfolio">Загляни в портфолио</a>} />
          </Message>
        </div>
      </CSSTransition>
      {showButton && (
        <div>
          <Wait />
        </div>
      )}
    </div>
  );
};

export default Chatbox;
