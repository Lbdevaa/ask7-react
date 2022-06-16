import React, { useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
import '../alert.css';
import './index.sass';
import MyPhone from 'components/MyPhone';
import Bubble from '../Bubble';
import WorkList from '../WorkList';
import Message from '../Message';
// import Wait from '../Wait';

const Chatbox = () => {
  const [show, setShow] = useState(false);
  // const [showButton, setShowButton] = useState(true);

  React.useEffect(() => {
    setTimeout(() => setShow(!show), 1200);
  }, []);

  return (
    <div className="chatbox">
      <Message>
        <Bubble content="Привет, это сайт моей студии! 🤗" />
        <Bubble content="Разрабатываем сайты, встраиваем в систему управления и делаем дизайн" />
        <Bubble content="Вот некоторые из готовых работ" />
      </Message>

      <Message>
        <WorkList />
      </Message>

      <Message>
        <Bubble content={<MyPhone />} />
      </Message>
    </div>
  );
};

export default Chatbox;
