import styled from 'styled-components';

const ListItem = styled.li`
  margin: 0;
  display: flex;
  flex-direction: column;
  .picture {
    height: 200px;
    aspect-ratio: 1;
    margin-bottom: 14px;
  }
  .picture__img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }
`;

export default ListItem;
