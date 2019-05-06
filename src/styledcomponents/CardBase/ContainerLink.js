// Import Node Modules
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  ${props => (props.url !== '' ? 'cursor: pointer' : 'cursor: auto')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '100%')};
  margin: 0 auto;
  box-sizing: border-box;
`;

const MyLink = styled.a`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color:#464543 !important;
`;

function OnClickUrl(url, children) {
  if (url.indexOf('http') === 0) {
    return (
      <MyLink href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </MyLink>
    );
  }
  return <MyLink href={url}>{children}</MyLink>;
}

const ContainerLink = (props) => {
  const {
    url,
    children,
    className,
    maxWidth,
  } = props;

  return (
    <Container
      role="button"
      className={className}
      maxWidth={maxWidth}
      url={url}
    >
      { url !== '' ? OnClickUrl(url, children) : children}
    </Container>
  );
};

// Proptypes
ContainerLink.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
};

ContainerLink.defaultProps = {
  children: undefined,
  className: undefined,
  url: undefined,
  maxWidth: '100%',
};

// Exports
export default ContainerLink;
