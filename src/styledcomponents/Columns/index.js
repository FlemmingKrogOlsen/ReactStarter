// Common Component : Columns

// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled CSS
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  

  @media (min-width: ${props => props.width}) {
    & > div {
      flex-basis: calc((100% - (${props => props.columns - 1}) * ${props => props.gap}px) / ${props => props.columns});
    }
  }
  @media (max-width: ${props => props.width}) {
    & > div {
      flex-basis: 100%;
    }
  }
`;

// Class
export const Columns = (props) => {
  const {
    gap,
    minWidth,
    className,
    children,
  } = props;

  return (
    <Container
      columns={React.Children.count(children)}
      width={minWidth}
      gap={gap}
      className={className}
    >
      {children}
    </Container>
  );
};


// Proptypes
Columns.propTypes = {
  minWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
  gap: PropTypes.string,
  className: PropTypes.string,
};

Columns.defaultProps = {
  minWidth: '762px',
  gap: '0',
  className: undefined,
};

// Exports
export default Columns;
