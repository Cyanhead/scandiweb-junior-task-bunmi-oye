import { createStore } from 'redux';
import { loadState, saveState } from '../helper/localStorage';

import rootReducer from './rootReducer';

const initialState = loadState();

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
