// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import Image
import DefaultImage from '../../assets/Banner_Default.png';
import Arrow from '../../assets/icon_Arrow_Right_White.svg';

// Import Component
import ContainerLink from '../CardBase/ContainerLink';

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
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const WhiteArrow = styled.img`
  position: relative;
  top: 3px;
  margin-left: 10px;
  filter: drop-shadow(rgba(0, 0, 0, 0.75) 1px 1px 1px);
`;

const Header = styled.h1`
  font-size: 30px;
  padding: 0 20px;
`;

const Manchet = styled.p`
  padding: 0 20px;
`;

// Component
const Banner = (props) => {
  const {
    image,
    header,
    text,
    arrow,
    altText,
    url,
  } = props;
  return (
    <ContainerLink url={url}>
      <Container>
        <Image
          src={image === '' ? DefaultImage : image}
          alt={altText}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = DefaultImage;
            e.target.alt = 'Default Image';
          }}
        />
        <Text>
          <Header>{header}</Header>
          <Manchet>
            {text}
            {arrow ? <WhiteArrow src={Arrow} alt="Arrow right" /> : null}
          </Manchet>
        </Text>
      </Container>
    </ContainerLink>
  );
};

Banner.propTypes = {
  /** Header text */
  header: PropTypes.string.isRequired,
  /** Manchet text */
  text: PropTypes.string.isRequired,
  /** Image url */
  image: PropTypes.string,
  /** Image url */
  altText: PropTypes.string,
  /** Arrow pointing right */
  arrow: PropTypes.bool,
  /** Banner Url */
  url: PropTypes.string,
};

Banner.defaultProps = {
  image: DefaultImage,
  altText: 'alternate text missing',
  arrow: false,
  url: '',
};

export default Banner;
