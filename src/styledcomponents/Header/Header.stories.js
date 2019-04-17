// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs';

// Import component
import Header from '.';

// eslint-disable-next-line no-console
console.log('Testing console otput');

// Story
const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);
stories.add('Header', () => (
  <Header color={color('Header color', '#cecece')}>
    {text('Header text', 'Header text')}
  </Header>
));
