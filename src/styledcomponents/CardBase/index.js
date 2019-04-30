// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContainerLink from './ContainerLink';

// Variables
const height = props => (props.minHeight ? props.minHeight : '200px');

// Styled-Component : PageContainer
const Content = styled.div`
  border-radius: 7px;
  box-sizing: border-box;
  width: 100%;
  min-height: ${height};
  margin: 0 auto;
  overflow: hidden;
  ${props => (props.shadow === true
    ? 'box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);'
    : '')}
`;

const Card = (props) => {
  const {
    children,
    shadow,
    maxWidth,
    minHeight,
    url,
  } = props;
  return (
    <ContainerLink maxWidth={maxWidth} url={url}>
      <Content shadow={shadow} minHeight={minHeight}>
        {children}
      </Content>
    </ContainerLink>
  );
};

// Proptypes
Card.propTypes = {

  /** child nodes */
  children: PropTypes.node.isRequired,
  /** Card Shadow */
  shadow: PropTypes.bool,
  /** Card max width */
  maxWidth: PropTypes.string.isRequired,
  /** Card minimum height */
  minHeight: PropTypes.string.isRequired,
  /** Card link */
  url: PropTypes.string,
};

Card.defaultProps = {
  shadow: false,
  url: undefined,
};

// Export component
export default Card;
