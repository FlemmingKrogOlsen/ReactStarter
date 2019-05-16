// Import node modules
import React from 'react';

// Import Storybook modules
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';

// Import GlobalStyle

// Import component
import Banner from '.';


// Import Image
import DefaultImage from '../../assets/Banner_storybook.png';

// Wrapper

// Fixed Texts
const Link = 'https://www.google.com/';
const loremHeader = 'orci ac auctor augue';
const loremMnachet = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';


// Story
const stories = storiesOf('Banner', module);
stories.addDecorator(withKnobs);

// Image card story
stories.add('Image Card', () => (
  <Banner
    image={text('Background Image', DefaultImage)}
    altText={text('Alternate text for image', 'Image description')}
    header={text('Header text', loremHeader)}
    text={text('Manchet text', loremMnachet)}
    url={text('Url', Link)}
    arrow
  />
));
