import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: 7rem;
  font-weight: 900;
  line-height: 0.73;
  text-transform: uppercase;
  padding: 20px 20px 100px;
`;

const LogoNum = styled.span`
  font-weight: 300;
  background: linear-gradient(135deg, #6b73ff 10%, #000dff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LogoContainer>
        {this.props.content} <LogoNum>{this.props.contentSpan}</LogoNum>
      </LogoContainer>
    );
  }
}

Logo.propTypes = {
  content: PropTypes.string,
  contentSpan: PropTypes.string,
};

Logo.defaultProps = {
  content: 'ASK',
  contentSpan: '7',
};

export default Logo;
