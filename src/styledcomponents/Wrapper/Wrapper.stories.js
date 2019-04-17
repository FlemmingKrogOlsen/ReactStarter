// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs';

// Import component
import Wrapper from '.';

// Story
const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);
stories.add('Wrapper', () => (
  <Wrapper color={color('Header color', '#ffffff')}>
    {text('Wrapper comtent', 'Wrapper content')}
  </Wrapper>
));
