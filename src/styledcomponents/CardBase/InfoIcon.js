// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import Icon
import Arrow from '../../assets/icon_Arrow_Right_Blue.svg';

// Styled Component

const Container = styled.div`
  position:relative;
  box-sizing: border-box;
  flex: 1;
`;

const Group = styled.div`
  text-transform: uppercase;
  color: #757575;
  padding: 24px 24px 0px 24px;
`;

const TextContainer = styled.div`
  padding: 0px 24px 24px 24px;
`;

const BlueArrow = styled.img`
  position: absolute;
  bottom : 20px;
  right: 20px;
`;

const Image = styled.img`
  max-height: 200px;
`;


// Component
const InfoIcon = (props) => {
  const {
    group,
    text,
    arrow,
    altText,
    image,
  } = props;
  return (
    <Container>
      {image !== '' ? <Image src={image} alt={altText} /> : null}
      <Group>{group}</Group>
      <TextContainer dangerouslySetInnerHTML={{ __html: text }} />
      {arrow === true ? <BlueArrow src={Arrow} alt="Arrow right" /> : null}
    </Container>
  );
};

InfoIcon.propTypes = {
  /** Category name */
  group: PropTypes.string,
  /** Html String */
  text: PropTypes.node.isRequired,
  /** Arrow pointing right */
  arrow: PropTypes.bool,
  /** Image souece */
  image: PropTypes.string,
  /** alternate image text */
  altText: PropTypes.string,
};

InfoIcon.defaultProps = {
  group: '',
  arrow: false,
  image: '',
  altText: '',
};

export default InfoIcon;
