import { createGlobalStyle, css } from 'styled-components';

const common = css`
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    ${common};
    line-height: 1.15;
    margin-bottom: 24px;
    font-weight: 700;

    font-size: 20px;
    @media screen and (min-width: 768px) {
      font-size: 34px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 42px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 50px;
    }
  }

  h2 {
    ${common};
    margin-bottom: 17px;
    font-weight: 700;

    font-size: 20px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 30px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 35px;
    }
  }

  h3 {
    ${common};
    line-height: 1.5;
    font-weight: 700;

    font-size: 14px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 18px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 20px;
    }
  }

  p {
    ${common};
    line-height: 1.38;
    letter-spacing: -0.3px;
    font-weight: 400;
    margin-bottom: 24px;

    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }

  a {
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    font-weight: 500;
    text-decoration: none;
    color: #2aa7e3;

    &:visited {
      color: #4f4586;
    }

    &:hover {
      color: #4291b8;
    }

    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }

`;

export default GlobalStyle;
