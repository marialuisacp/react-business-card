import {
  UPDATE_LETTER
} from '../actions/actionTypes';

export const updateLetter = (value, direction) => ({
  type: UPDATE_LETTER,
  letter: value,
  direction: direction
});