// Common Component : Spinner

// Import Node Modules
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

// Classes
function CreateElements() {
  let styles = '';
  const step = 360 / 12;
  const timer = -1200;
  for (let i = 0; i < 12; i += 1) {
    styles += `
      div:nth-child(${i}) {
        transform: rotate(${step * i}deg);
        animation-delay: ${timer + i * 100}ms;
      }
    `;
  }
  return css`
    ${styles};
  `;
}

const animation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const LdsSpinner = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  div {
    transform-origin: 32px 32px;
    animation: ${animation} 1200ms linear infinite;
  }
  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 29px;
    width: 5px;
    height: 14px;
    border-radius: 20%;
    background: gray;   
  }
  ${CreateElements()};
`;

const Spinner = (props) => {
  const { color } = props;
  return (
    <LdsSpinner color={color}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </LdsSpinner>
  );
};

// Proptypes
Spinner.propTypes = {
  color: PropTypes.string,
};

Spinner.defaultProps = {
  color: 'gray',
};

// Exports
export default Spinner;
