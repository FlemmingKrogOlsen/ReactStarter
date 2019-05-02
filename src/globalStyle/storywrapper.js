// Import Node Modules
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Import Global style
import GlobalStyle from './index';

// Styled Components
const Container = styled.div`
  background-color: #54a8d1;
  padding:40px;
`;

// Component
export const StoryWrapper = (props) => {
  const { children } = props;

  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  );
};

// Proptypes
StoryWrapper.propTypes = {
  /** child nodes */
  children: PropTypes.node.isRequired,
};

export default StoryWrapper;
