// Import Node Modules
import React from 'react';

// Import Storybook Modules
import { storiesOf } from '@storybook/react';
import { withKnobs, color } from '@storybook/addon-knobs';
// Import component
import Spinner from './index';
import Spinner2 from './spinner2';

// Story : Spinner
const stories = storiesOf('Common', module);

stories.addDecorator(withKnobs);

stories.add('Spinner', () => (
  <center>
    <Spinner color={color('Spinner Color', '#464543')} />

    <Spinner2 color={color('Spinner Color', '#464543')} />
  </center>
));
