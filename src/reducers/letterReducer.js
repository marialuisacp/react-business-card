import { UPDATE_LETTER } from '../actions/actionTypes';

const initialState = {
  currentLetter: 'D',
  direction: 0
};

export const letterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LETTER:
      return {
        ...state,
        currentLetter: action.letter,
        direction: action.direction
      };
    default:
      return state;
  }
};