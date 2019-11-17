import React from 'react';
import renderer from 'react-test-renderer';

import Alphabet from '../../components/Alphabet/Alphabet';

test('Component Alphabet should render correctly', () => {
  const component = renderer.create(
    <Alphabet />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
