import { letterReducer } from './letterReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  letterState: letterReducer
});