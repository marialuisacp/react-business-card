import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../components/Header/Header';

describe('Header', () => {
  it('Component Header should render correctly', () => {
    const component = renderer.create(
      <Header />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
