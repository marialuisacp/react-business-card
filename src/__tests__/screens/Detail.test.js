import React from 'react';
import renderer from 'react-test-renderer';

import { createLocation } from 'history';
import { MemoryRouter as Router } from 'react-router-dom';
// import { match as routerMatch } from 'react-router';

import Detail from '../../screens/Detail/Detail';

describe('Detail', () => {
  test('Screen Detail should render correctly', () => {
    const location = {
      state: {
        data: {
          letter: 'D',
          people: [{
            name: 'Danilo Rocha',
            office: 'Desenvolvedor',
            image: './assets/images/people/d01.jpg',
            email: 'danilo.rocha@mundiale.com'
          }]
        }
      }
    };

    const component = renderer.create(
      <Router>
        <Detail location={createLocation(location)} />
      </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
