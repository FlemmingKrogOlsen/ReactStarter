// Common Component : Columns

// Import Node Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled CSS
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: ${props => props.width}px;
  margin: 0 auto;

  @media (min-width: ${props => props.width}px) {
    & > div {
      flex-basis: ${props => props.colWidth}px;
    }
  }
  @media (max-width: ${props => props.width}px) {
    & > div {
      flex-basis: 100%;
    }
  }
`;

// Class
export const Columns = (props) => {
  const {
    gap,
    width,
    className,
    children,
  } = props;

  const cnt = React.Children.count(children);

  const colWidth = (width - ((cnt - 1) * gap)) / cnt;

  return (
    <Container
      colWidth={colWidth}
      width={width}
      gap={gap}
      className={className}
    >
      {children}
    </Container>
  );
};

// Proptypes
Columns.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
  gap: PropTypes.number,
  className: PropTypes.string,
};

Columns.defaultProps = {
  width: 762,
  gap: 0,
  className: undefined,
};

// Exports
export default Columns;
