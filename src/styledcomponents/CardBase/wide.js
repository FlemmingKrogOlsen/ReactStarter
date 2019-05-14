// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import Icon
import DefaultImage from '../../assets/Card_Wide_Default.png';

// Styled Component

const Container = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  flex: 1;
  box-sizing: border-box;
  padding: 0 40px;
`;

// Component
const Wide = (props) => {
  const {
    image,
    text,
    imageRight,
    altText,
  } = props;

  const ImageSide = (
    <ImageContainer>
      <img
        src={image === '' ? '' : image}
        alt={altText}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = DefaultImage;
          e.target.alt = 'Default Image';
        }}
      />
    </ImageContainer>
  );
  const TextSide = <TextContainer dangerouslySetInnerHTML={{ __html: text }} />;

  return (
    <Container>
      {imageRight === true ? TextSide : ImageSide}
      {imageRight === true ? ImageSide : TextSide}
    </Container>
  );
};

Wide.propTypes = {
  /** Html String */
  text: PropTypes.node.isRequired,
  /** Icon url */
  image: PropTypes.string,
  /** Image Alt Text */
  altText: PropTypes.string,
  /** What side is image displayed */
  imageRight: PropTypes.bool,
};

Wide.defaultProps = {
  image: DefaultImage,
  imageRight: true,
  altText: 'Alt text is missing',
};

export default Wide;
