// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// Import component
import Card from '.';

// Story
const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);
stories.add('Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '420px')}
    minHeight={text('Min height', '200px')}
    url={text('Url', 'https://www.google.com/')}
  >
    {text('Card content', 'Card content')}
  </Card>
));
