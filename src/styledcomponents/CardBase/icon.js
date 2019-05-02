// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import Icon
import Icon from '../../assets/Card_Icon_Default.png';
import Arrow from '../../assets/icon_Arrow_Right_Blue.svg';

// Styled Component

const Container = styled.div`
  position:relative;
  flex: 1;
  display: flex;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  min-width: 100px;
  flex:1;
  display: flex;
  justify-content:center;
  align-items: center;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  flex:4;
  box-sizing: border-box;
  padding: 20px 20px 20px 0px;
`;

const BlueArrow = styled.img`
  position: absolute;
  bottom : 20px;
  right: 20px;
`;


// Component
const TextIcon = (props) => {
  const { icon, text, arrow } = props;
  return (
    <Container>
      <IconContainer><img src={icon === '' ? Icon : icon} alt="icon" /></IconContainer>
      <TextContainer dangerouslySetInnerHTML={{ __html: text }} />
      {arrow === true ? <BlueArrow src={Arrow} alt="Arrow right" /> : null}
    </Container>
  );
};

TextIcon.propTypes = {
  /** Html String */
  text: PropTypes.node.isRequired,
  /** Icon url */
  icon: PropTypes.string,
  /** Arrow pointing right */
  arrow: PropTypes.bool,
};

TextIcon.defaultProps = {
  icon: Icon,
  arrow: false,
};

export default TextIcon;
