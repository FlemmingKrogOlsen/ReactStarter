// Import Node Modules
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Import Icon
import DefaultProfile from '../../assets/Card_business_default.png';

// Styled Component

const common = css`
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  padding: 0 30px;

`;

const Container = styled.div`
  position:relative;
  box-sizing: border-box;
  flex: 1;
`;

export const Name = styled.div`
  ${common};
  font-weight: bold;
`;

export const Job = styled.div`
  ${common};
  margin-bottom: 10px;
`;

export const TLF = styled.div`
  ${common};
`;

export const Email = styled.div`
  ${common};
  a {
    text-decoration: none;
    color: blue;
  }
`;

const Image = styled.img`
  margin-bottom: 10px;
`;


// Component
const BusinessCard = (props) => {
  const {
    name,
    job,
    tlf,
    email,
    altText,
    image,
  } = props;
  const mailto = `mailto:${email}`;
  return (
    <Container>
      <Image src={image === '' ? DefaultProfile : image} alt={altText} />
      <Name role="none">{name}</Name>
      {job !== '' && <Job role="none">{job}</Job>}
      {tlf !== '' && (
        // eslint-disable-next-line react/jsx-one-expression-per-line
        <TLF role="none">Telefon: {tlf}</TLF>
      )}
      {email !== '' && (
        <Email role="none">
          <a href={mailto}>{email}</a>
        </Email>
      )}
    </Container>
  );
};

BusinessCard.propTypes = {
  /** Image source */
  image: PropTypes.string,
  /** alternate image text */
  altText: PropTypes.string,
  /** Profile Name */
  name: PropTypes.string.isRequired,
  /** Profile job title */
  job: PropTypes.string.isRequired,
  /** Profile phone number */
  tlf: PropTypes.string.isRequired,
  /** Profile email */
  email: PropTypes.string.isRequired,
};

BusinessCard.defaultProps = {
  image: DefaultProfile,
  altText: 'Default profile image',
};

export default BusinessCard;
