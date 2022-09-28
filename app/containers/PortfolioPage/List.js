import styled from 'styled-components';

const List = styled.ul`
  padding-left: 0;
  margin: 0 0 50px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 30px;
`;

export default List;
