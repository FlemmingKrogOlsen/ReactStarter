// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled-Component : PageContainer
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  min-height: 400px;
  border-radius: 7px;
  background-color: ${props => props.color};
`;

const Wrapper = (props) => {
  const { children, color } = props;
  return <Container color={color}>{children}</Container>;
};

// Proptypes
Wrapper.propTypes = {
  /** Wrapper's background color */
  color: PropTypes.string,
  /** child nodes */
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  color: '#ffffff',
};

// Export component
export default Wrapper;
