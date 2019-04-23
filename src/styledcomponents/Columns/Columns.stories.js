// Import Node Modules
import React from 'react';

// Import Storybook Modules
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

// Import component
import { Columns } from './index';

// Set Column content CSS
const css = { backgroundColor: 'lightblue', padding: '20px' };

// Story : Columns
const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);
stories.add('Columns', () => (
  <Columns
    gap={text('Gap between Columns', '10')}
    minWidth={text('Breakpoint', '768px')}
  >
    <div>
      <div style={css}>1</div>
    </div>
    <div>
      <div style={css}>2</div>
    </div>
    <div>
      <div style={css}>3</div>
    </div>
  </Columns>
));
