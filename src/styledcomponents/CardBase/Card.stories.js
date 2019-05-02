// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  object,
} from '@storybook/addon-knobs';

// Import component
import Card from '.';
import BackgrounImage from './bgImage';
import TextIcon from './icon';
import Wide from './wide';
import InfoIcon from './info';

// Import Image
import BackgrounImageStorybook from '../../assets/Card_BackgroundImage_Storybook.jpg';
import IconStorybook from '../../assets/Card_Icon_Storybook.png';
import WideStorybook from '../../assets/Card_wide_Storybook.png';
import InfoCardImage from '../../assets/Card_info_default.png';

// Story
const stories = storiesOf('Components.Card', module);
stories.addDecorator(withKnobs);
stories.add('Card Container', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '420px')}
    minHeight={text('Min height', '200px')}
    url={text('Url', 'https://www.google.com/')}
  >
    <div style={object('Div style', { padding: '10px' })}>{text('Card content', 'Card content')}</div>
  </Card>
),
{
  knobs: {
    escapeHTML: false,
  },
});

stories.add('Icon Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '620px')}
    minHeight={text('Min height', '240px')}
    url={text('Url', 'https://www.google.com/')}
  >
    <TextIcon
      icon={text('Background Image', IconStorybook)}
      text={text('Text', '<h1>Header</h1><p>paragraph</P>')}
      arrow={boolean('Show arrow', true)}
    />
  </Card>
),
{
  knobs: {
    escapeHTML: false,
  },
});

stories.add('Image Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '400px')}
    minHeight={text('Min height', '240px')}
    url={text('Url', 'https://www.google.com/')}
  >
    <BackgrounImage
      url={text('Background Image', BackgrounImageStorybook)}
      altText={text('Alternate text for image', 'Image description')}
      arrow={boolean('Show arrow', true)}
      header={text('Header text', 'Header text')}
      text={text('Manchet text', 'Manchet text')}

    />
  </Card>
));

stories.add('Info Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '400px')}
    minHeight={text('Min height', '200px')}
    url={text('Url', 'https://www.google.com/')}
  >
    <InfoIcon
      group={text('Group name', 'Group')}
      text={text('Text', '<h1>Header</h1><p>paragraph</P>')}
      arrow={boolean('Show arrow', true)}
      image={text('Background Image', InfoCardImage)}
      altText={text('Image alt text', 'Image Alternate text')}
    />
  </Card>
),
{
  knobs: {
    escapeHTML: false,
  },
});

stories.add('Wide Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '1060px')}
    minHeight={text('Min height', '562px')}
    url={text('Url', 'https://www.google.com/')}
  >
    <Wide
      icon={text('Background Image', WideStorybook)}
      text={text('Text', '<h1>Header</h1><p>paragraph</P>')}
      imageRight={boolean('Image on right side', true)}
      altText={text('Image alt text', 'A11y text')}
    />
  </Card>
),
{
  knobs: {
    escapeHTML: false,
  },
});
