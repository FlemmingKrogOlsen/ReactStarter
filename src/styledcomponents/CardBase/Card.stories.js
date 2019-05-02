// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  object,
  color,
} from '@storybook/addon-knobs';

// Import GlobalStyle
import { StoryWrapper } from '../../globalStyle/storywrapper';

// Import component
import Card from '.';
import BackgrounImage from './bgImage';
import TextIcon from './icon';
import Wide from './wide';
import InfoIcon from './info';
import Business from './business';
import News from './news';

// Import Image
import BackgrounImageStorybook from '../../assets/Card_BackgroundImage_Storybook.jpg';
import IconStorybook from '../../assets/Card_Icon_Storybook.png';
import WideStorybook from '../../assets/Card_wide_Storybook.png';
import InfoCardImage from '../../assets/Card_info_default.png';
import ProfileImage from '../../assets/Card_business_storybook.png';
import NewsImage from '../../assets/Card_news_default.png';

// Wrapper
const DefaultLayoutDecorator = storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>;

// Fixed Texts
const Link = 'https://www.google.com/';
const LoremHTML = '<h2>orci ac auctor augue</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet. Enim praesent elementum facilisis leo. Diam maecenas sed enim ut sem viverra aliquet eget.</p>';
const infoLoremHtml = '<h3>orci ac auctor augue</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet. Enim praesent elementum facilisis leo. Diam maecenas sed enim ut sem viverra aliquet eget.</p>';
const loremHeader = 'orci ac auctor augue';
const loremMnachet = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';


// Story
const stories = storiesOf('Components.Card', module);
stories.addDecorator(withKnobs);
stories.addDecorator(DefaultLayoutDecorator);

// Card container story
stories.add('Card Container', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '420px')}
    minHeight={text('Min height', '200px')}
    url={text('Url', Link)}
    bgcolor={color('Background color', '#ffffff')}

  >
    <div style={object('Div style', { padding: '10px' })}>{text('Card content', 'Card content')}</div>
  </Card>
),
{
  knobs: {
    escapeHTML: false,
  },
});

// Icon card story
stories.add('Icon Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '620px')}
    minHeight={text('Min height', '240px')}
    url={text('Url', Link)}
    bgcolor={color('Background color', '#ffffff')}
  >
    <TextIcon
      icon={text('Background Image', IconStorybook)}
      text={text('Text', LoremHTML)}
      arrow={boolean('Show arrow', true)}
    />
  </Card>
),
{
  knobs: {
    escapeHTML: false,
  },
});

// Image card story
stories.add('Image Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '400px')}
    minHeight={text('Min height', '240px')}
    url={text('Url', Link)}
    bgcolor={color('Background color', '#ffffff')}
  >
    <BackgrounImage
      url={text('Background Image', BackgrounImageStorybook)}
      altText={text('Alternate text for image', 'Image description')}
      arrow={boolean('Show arrow', true)}
      header={text('Header text', loremHeader)}
      text={text('Manchet text', loremMnachet)}

    />
  </Card>
));

// Info card story
stories.add('Info Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '400px')}
    minHeight={text('Min height', '200px')}
    url={text('Url', Link)}
    bgcolor={color('Background color', '#ffffff')}
  >
    <InfoIcon
      group={text('Group name', 'Group')}
      text={text('Text', infoLoremHtml)}
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

// Wide card story
stories.add('Wide Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '1060px')}
    minHeight={text('Min height', '562px')}
    url={text('Url', Link)}
    bgcolor={color('Background color', '#ffffff')}
  >
    <Wide
      icon={text('Background Image', WideStorybook)}
      text={text('Text', LoremHTML)}
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

// Business card story
stories.add('Business Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '290px')}
    minHeight={text('Min height', '360px')}
    url={text('Url', '')}
    bgcolor={color('Background color', '#ffffff')}
  >
    <Business
      image={text('Background Image', ProfileImage)}
      altText={text('Image alt text', 'Image Alternate text')}
      name={text('Profile name', 'Profile name')}
      job={text('Profile job title', 'Profile job title')}
      tlf={text('Profile phone number', 'xx xx xx xx')}
      email={text('Profile email address', 'Profile@email.address')}
    />
  </Card>
),
{
  knobs: {
    escapeHTML: false,
  },
});

// News card story
stories.add('News Card', () => (
  <Card
    shadow={boolean('Shadow', true)}
    maxWidth={text('Max width', '700px')}
    minHeight={text('Min height', '150px')}
    url={text('Url', Link)}
    bgcolor={color('Background color', '#ffffff')}
  >
    <News
      image={text('Background Image', NewsImage)}
      header={text('Header text', loremHeader)}
      manchet={text('Manchet text', loremMnachet)}
      imageRight={boolean('Image on right side', false)}
      altText={text('Image alt text', 'A11y text')}
      timestamp="21.08.2017"
    />
  </Card>
),
{
  knobs: {
    escapeHTML: false,
  },
});
