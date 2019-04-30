// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// Import component
import Card from '.';
import BackgrounImage from './BackgroundImage';
import TextIcon from './TextIcon';

// Import Image
import BackgrounImageStorybook from '../../assets/Card_BackgroundImage_Storybook.jpg';
import IconStorybook from '../../assets/Card_Icon_Storybook.png';

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
    <div style={{ padding: '10px' }}>{text('Card content', 'Card content')}</div>
  </Card>
));

stories.add('Card- BackgrounImage', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '400px')}
    minHeight={text('Min height', '240px')}
    url={text('Url', 'https://www.google.com/')}
  >
    <BackgrounImage
      url={text('Background Image', BackgrounImageStorybook)}
      text="<h3>Card content,<br />image sets the height</h3>"
    />
  </Card>
));

stories.add('Card - Icon', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '620px')}
    minHeight={text('Min height', '240px')}
    url={text('Url', 'https://www.google.com/')}
  >
    <TextIcon
      icon={text('Background Image', IconStorybook)}
      text="<h3>Header</h3><p>paragraph</P>"
    />
  </Card>
));
