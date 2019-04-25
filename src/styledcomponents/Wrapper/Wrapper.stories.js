// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  color,
  number,
  boolean,
} from '@storybook/addon-knobs';

// Import component
import Wrapper from '.';

// Story
const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);
stories.add('Wrapper', () => (
  <Wrapper
    minWidth={number('Breakpoint', 1200)}
    color={color('Header color', '#ffffff')}
    shadow={boolean('Shadow', true)}
  >
    {text('Wrapper comtent', 'Wrapper content')}
  </Wrapper>
));
