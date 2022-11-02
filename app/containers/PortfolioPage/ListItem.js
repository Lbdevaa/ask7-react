import styled from 'styled-components';

const ListItem = styled.li`
  margin: 0;
  /* display: flex; */
  /* flex-direction: column; */
  .picture {
    /* height: 200px; */
    /* width: 100%; */
    aspect-ratio: 16/9;
    height: 40px;
    /* margin-bottom: 14px; */
  }
  .picture__img {
    object-fit: contain;
    object-position: top;
    width: 100%;
    height: 100%;
  }
`;

export default ListItem;
