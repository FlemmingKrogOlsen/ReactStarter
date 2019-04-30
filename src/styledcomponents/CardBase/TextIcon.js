// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import Icon
import Icon from '../../assets/Card_Icon_Default.png';

// Styled Component

const Container = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  flex:1;
  display: flex;
  justify-content:center;
  align-items: center;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  flex:4;
  padding: 10px 0;
  box-sizing: border-box;
`;

// Component
const TextIcon = (props) => {
  const { icon, text } = props;
  return (
    <Container>
      <IconContainer><img src={icon === '' ? Icon : icon} alt="icon" /></IconContainer>
      <TextContainer dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  );
};

TextIcon.propTypes = {
  /** Html String */
  text: PropTypes.node.isRequired,
  /** Icon url */
  icon: PropTypes.string,
};

TextIcon.defaultProps = {
  icon: Icon,
};

export default TextIcon;
