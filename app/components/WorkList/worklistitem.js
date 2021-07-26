import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NormalImg from 'components/Img';
// import 'file?name=[name].[ext]!../img/yourimg.png';

const Name = styled.p`
  background: rgba(30, 30, 30, 0.2);
  padding: 1.5rem 2.25rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 1.41;
  color: #1e1e1e;
  -webkit-transition: background 0.25s ease;
  transition: background 0.25s ease;
  font-size: 1.25rem;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  transition: 0.2s ease;
  margin: 0;
`;

const Item = styled.div`
  display: flex;
  width: calc(100% / 12 * 3);
  &:hover {
    ${Name} {
      color: white;
      background: #000dff;
    }
  }
`;
const Link = styled.a`
  width: 100%;
  height: 100%;
  border-radius: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-decoration: none;
  color: white;
`;

const Img = styled(NormalImg)`
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 300px;
  position: relative;
  -webkit-filter: saturate(80%) brightness(80%);
  filter: saturate(80%) brightness(80%);
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
`;
class WorkListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Item>
        <Link href="#">
          <Img src={this.props.poster} alt={this.props.name} />
          <Name>{this.props.name}</Name>
        </Link>
      </Item>
    );
  }
}

WorkListItem.propTypes = {
  name: PropTypes.string,
};

WorkListItem.defaultProps = {
  name: 'Строительная полимерная компания',
  poster: 'https://source.unsplash.com/random',
};

export default WorkListItem;
