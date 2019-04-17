/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';

import Wrapper from './index';

test('Wrapper rindering', () => {
  const component = renderer.create(
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Wrapper>
      <h1>Wrapper Content</h1>
    </Wrapper>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
