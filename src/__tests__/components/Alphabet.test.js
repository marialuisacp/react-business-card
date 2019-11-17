import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Alphabet from '../../components/Alphabet/Alphabet';
import { Provider } from 'react-redux'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Alphabet', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      letterCenter: 'D',
      dispatch: jest.fn(),
      direction: 1
    }

    const store = mockStore({
      currentLetter: 'D',
      direction: 0
    })

    const wrapper = shallow(<Provider store={store}>
      <Alphabet {...props} />
    </Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})