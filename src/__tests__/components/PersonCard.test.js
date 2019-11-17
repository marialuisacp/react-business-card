import React from 'react';
import renderer from 'react-test-renderer';

import PersonCard from '../../components/PersonCard/PersonCard';

describe('PersonCard', () => {
  it('Component PersonCard should render correctly', () => {
    const props = {
      person: {
        letter: 'D',
        people: [{
          name: 'Danilo Rocha',
          office: 'Desenvolvedor',
          image: './assets/images/people/d01.jpg',
          email: 'danilo.rocha@mundiale.com'
        }]
      }
    }
    const component = renderer.create(
      <PersonCard {...props} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})
