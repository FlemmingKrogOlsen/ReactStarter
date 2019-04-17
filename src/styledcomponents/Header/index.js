// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled-Component : Header
const Container = styled.div`
  text-align: center;
  background-color: ${props => props.color};
  padding: 20px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 25px;
  text-shadow: 2px 2px 2px gray;
  color: white;
`;

const Header = (props) => {
  const { children, color } = props;
  return <Container color={color}>{children}</Container>;
};

// Proptypes
Header.propTypes = {
  /** Header's background color */
  color: PropTypes.string,
  /** child nodes */
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  color: '#cecece',
};

// Export component
export default Header;
