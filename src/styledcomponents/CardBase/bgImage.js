// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import Image
import BackgrounImage from '../../assets/Card_BackgroundImage_Default.jpg';
import Arrow from '../../assets/icon_Arrow_Right_White.svg';

// Styled Components
const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 1px 1px 2px black;
  width:100%;
`;

const Image = styled.img`
  width: 100%;
  display:block;
`;

const WhiteArrow = styled.img`
  position: relative;
  top: 3px;
  margin-left:10px;
  filter: drop-shadow(rgba(0, 0, 0, 0.75) 1px 1px 1px);
`;

const Header = styled.h1`
  font-size: 30px;
  padding:0 20px;
`;

const Manchet = styled.p`
  padding:0 20px;
`;

// Component
const BackgroundImage = (props) => {
  const {
    url,
    header,
    text,
    arrow,
    altText,
  } = props;
  return (
    <Container>
      <Image src={url === '' ? BackgrounImage : url} alt={altText} />
      <Text>
        <Header>{header}</Header>
        <Manchet>
          {text}
          {arrow ? <WhiteArrow src={Arrow} alt="Arrow right" /> : null}
        </Manchet>
      </Text>
    </Container>
  );
};

BackgroundImage.propTypes = {
  /** Header text */
  header: PropTypes.string.isRequired,
  /** Manchet text */
  text: PropTypes.string.isRequired,
  /** Image url */
  url: PropTypes.string,
  /** Image url */
  altText: PropTypes.string,
  /** Arrow pointing right */
  arrow: PropTypes.bool,
};

BackgroundImage.defaultProps = {
  url: BackgrounImage,
  altText: 'alternate text missing',
  arrow: false,
};

export default BackgroundImage;
