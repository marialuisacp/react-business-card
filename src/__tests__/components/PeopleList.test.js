import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import PeopleList from '../../components/PeopleList/PeopleList';

describe('PeopleList', () => {
  test('Component PeopleList should render correctly', () => {
    const props = {
      data: [
        {
          letter: 'D',
          people: [{
            name: 'Danilo Rocha',
            office: 'Desenvolvedor',
            image: './assets/images/people/d01.jpg',
            email: 'danilo.rocha@mundiale.com'
          }]
        },
        {
          letter: 'E',
          people: [{
            name: 'Eduardo Viana',
            office: 'UX Designer',
            image: './assets/images/people/e01.jpg',
            email: 'eduardo.viana@mundiale.com'
          }]
        }]
    };

    const component = renderer.create(
      <Router>
        <PeopleList {...props} />
      </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
