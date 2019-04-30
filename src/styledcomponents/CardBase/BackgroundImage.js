// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import Image
import BackgrounImage from '../../assets/Card_BackgroundImage_Default.jpg';

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
`;

const Image = styled.img`
  width: 100%;
  display:block;
`;

// Component
const BackgroundImage = (props) => {
  const { url, text } = props;
  return (
    <Container>
      <Image src={url === '' ? BackgrounImage : url} />
      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  );
};

BackgroundImage.propTypes = {
  /** Html String */
  text: PropTypes.node.isRequired,
  /** Image url */
  url: PropTypes.string,
};

BackgroundImage.defaultProps = {
  url: BackgrounImage,
};

export default BackgroundImage;
