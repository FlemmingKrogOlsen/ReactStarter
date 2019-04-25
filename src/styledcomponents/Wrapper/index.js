// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Variables
const width = props => (props.minWidth ? props.minWidth : 1024);

// Styled-Component : PageContainer
const Container = styled.div`
  @media (min-width: ${width}px) {
    width: ${width}px;
    margin: 0 auto;
  }
  @media (max-width: ${width}px) {
    width: 100%;
  }

  ${props => (props.shadow === true
    ? 'box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);'
    : '')}
  padding: 20px;
  min-height: 400px;
  border-radius: 7px;
  background-color: ${props => props.color};
  box-sizing: border-box;
`;

const Wrapper = (props) => {
  const {
    children,
    color,
    minWidth,
    shadow,
  } = props;
  return (
    <Container minWidth={minWidth} color={color} shadow={shadow}>
      {children}
    </Container>
  );
};

// Proptypes
Wrapper.propTypes = {
  /** Wrapper's background color */
  color: PropTypes.string,
  /** child nodes */
  children: PropTypes.node.isRequired,
  /** Breakpoint */
  minWidth: PropTypes.number,
  /** Shadow */
  shadow: PropTypes.bool,
};

Wrapper.defaultProps = {
  color: '#ffffff',
  minWidth: 1024,
  shadow: false,
};

// Export component
export default Wrapper;
