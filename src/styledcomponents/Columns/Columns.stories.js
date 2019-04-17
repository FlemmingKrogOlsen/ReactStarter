// Import Node Modules
import React from 'react';

// Import Storybook Modules
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

// Import component
import { Columns } from './index';

const css = { backgroundColor: 'lightblue' };

// Story : Columns
const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);
stories.add('Columns', () => (
  <Columns gap={number('Gap size', 10)} width={number('Total columns max-size / Breakpoint', 1200)}>
    <div style={css}>1</div>
    <div style={css}>2</div>
    <div style={css}>3</div>
    <div style={css}>4</div>
    <div style={css}>5</div>
    <div style={css}>5</div>
  </Columns>
));
