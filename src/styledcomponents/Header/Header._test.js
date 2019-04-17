/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';

test('Header rindering', () => {
  const component = renderer.create(
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Header>
      <h1>React Application</h1>
    </Header>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
