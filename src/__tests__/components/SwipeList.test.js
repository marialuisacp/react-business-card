import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SwipeList from '../../components/SwipeList/SwipeList';
import { Provider } from 'react-redux'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('SwipeList', () => {
  test('Component SwipeList should render without crashing given the required props', () => {
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
      <SwipeList {...props} />
    </Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})