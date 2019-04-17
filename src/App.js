// Import Node Modules
import React from 'react';

// Import GlobalStyle
import GlobalStyle from './globalStyle';

// Import Styled-Components
import { Header, Wrapper } from './styledcomponents';

// Application
const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Header>
      <h1>React Application</h1>
    </Header>
    <Wrapper>
      <h1>including</h1>
      <h3>Webpack 4</h3>
      <p>clean-webpack-plugin, html-webpack-plugin, uglifyjs-webpack-plugin</p>
      <h3>Storybook</h3>
      <p>A11y, actions, console, info, knobs, links, viewport</p>
      <h3>Styled-Components</h3>
    </Wrapper>
  </React.Fragment>
);

export default App;
