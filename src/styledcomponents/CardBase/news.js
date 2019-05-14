// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import Icons
import Arrow from '../../assets/icon_Arrow_Right_Blue.svg';
import DefaultImage from '../../assets/Card_news_default.png';

// Styled Component
const Container = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  flex: 3;
  box-sizing: border-box;
  padding: 20px 68px 20px 24px;
`;

const TimeStamp = styled.p`
  margin: 0;
`;

const Header = styled.h2`
  margin: 5px 0 0 0;

  font-size: 24px;
`;

const Manchet = styled.p`
  margin: 10px 0 0 0;
`;

const BlueArrow = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

// Component
const News = (props) => {
  const {
    image,
    imageRight,
    altText,
    header,
    manchet,
    timestamp,
    arrow,
  } = props;

  const ImageSide = image !== '' ? (
    <ImageContainer>
      <img
        src={image}
        alt={altText}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = DefaultImage;
          e.target.alt = 'Default Image';
        }}
      />
    </ImageContainer>
  ) : null;
  const TextSide = (
    <TextContainer>
      <TimeStamp className="footnote">{timestamp}</TimeStamp>
      <Header>{header}</Header>
      <Manchet>{manchet}</Manchet>
      {arrow === true ? (
        <BlueArrow
          style={imageRight === true ? { right: '190px' } : null}
          src={Arrow}
          alt="Arrow right"
        />
      ) : null}
    </TextContainer>
  );

  return (
    <Container>
      {imageRight === true ? TextSide : ImageSide}
      {imageRight === true ? ImageSide : TextSide}
    </Container>
  );
};

News.propTypes = {
  /** Header Text */
  header: PropTypes.string.isRequired,
  /** Manchet Text */
  manchet: PropTypes.string.isRequired,
  /** Manchet Text */
  timestamp: PropTypes.string.isRequired,
  /** Icon url */
  image: PropTypes.string,
  /** Image Alt Text */
  altText: PropTypes.string,
  /** What side is image displayed */
  imageRight: PropTypes.bool,
  /** Arrow pointing right */
  arrow: PropTypes.bool,
};

News.defaultProps = {
  image: '',
  imageRight: true,
  altText: 'Alt text is missing',
  arrow: true,
};

export default News;
