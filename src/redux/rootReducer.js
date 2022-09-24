import { combineReducers } from 'redux';

import cartReducer from './cart/cartReducer';
import currencyReducer from './currency/currencyReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
});

export default rootReducer;
