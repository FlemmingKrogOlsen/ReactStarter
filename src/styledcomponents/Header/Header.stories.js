// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs';

// Import component
import Header from '.';

// Story
const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);
stories.add('Header', () => (
  <Header bgcolor={color('Header color', '#888888')} textcolor={color('Text color', '#ffffff')}>
    <h1>{text('Header text', 'Header text')}</h1>
  </Header>
));
