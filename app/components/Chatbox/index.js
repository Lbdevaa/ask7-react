import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../alert.css';
import './index.sass';
import MyPhone from 'components/MyPhone';
import { Link, useRouteMatch } from 'react-router-dom';
import Bubble from '../Bubble';
import WorkList from '../WorkList';
import Message from '../Message';
import Wait from '../Wait';

const Chatbox = () => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [moreProjects, setMoreProjects] = useState(false);
  const { url } = useRouteMatch();

  React.useEffect(() => {
    setTimeout(() => setShow(!show), 1200);
  }, []);

  return (
    <div className="chatbox">
      <CSSTransition in={show} timeout={1000} classNames="alert" unmountOnExit>
        <>
          <Message>
            <Bubble text="Привет, это сайт моей студии! 🤗" />
            <Bubble text="Разрабатываем сайты, встраиваем в систему управления и делаем дизайн" />
            <Bubble text="Вот некоторые из готовых работ" />
            {/* <Bubble text="Hello everybody! Welcome! This is my studio website 🤗" />
            <Bubble text="We develop websites, integrate them into the management system and make design" />
            <Bubble text="Here are some of the completed works" /> */}
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

      <CSSTransition in={show} timeout={1000} classNames="alert" unmountOnExit>
        <>
          <Message>
            <Bubble text={<MyPhone />} />
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
          <Message className="guest btn-list">
            <button
              className="btn chat-btn"
              type="button"
              onClick={event => {
                event.target.classList.add('clicked', 'bubble__content');
                setMoreProjects(true);
                setTimeout(() => {
                  window.scrollTo(0, document.body.scrollHeight);
                }, 200);
              }}
            >
              Показать больше проектов
              {/* Show more projects */}
            </button>
            {/* <Bubble text="Показать больше проектов" /> */}
          </Message>
        </>
      </CSSTransition>
      {moreProjects && (
        <Message>
          <Bubble>
            <Link className="link" to={`${url}portfolio`}>
              Вот
              {/* Here is */}
              <span role="img" aria-label="pointer">
                👉
              </span>
              страница портфолио
              {/* the portfolio page */}
            </Link>
          </Bubble>
        </Message>
      )}
      {showButton && <Wait />}
    </div>
  );
};

export default Chatbox;
