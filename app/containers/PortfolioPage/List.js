import styled from 'styled-components';

const List = styled.ul`
  padding-left: 0;
  margin: 0 0 50px;
  list-style: none;
  width: 30vw;
  width: 100vw;
  column-width: 2em;
  gap: var(--gap);
  transform: scale(8.2);
  will-change: transform;
  transition: transform 1s cubic-bezier(0.075, 1, 0.25, 1), opacity 1s;
`;

export default List;
