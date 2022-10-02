import { combineReducers } from 'redux';

import cartReducer from './cart/cartReducer';
import categoryReducer from './category/categoryReducer';
import currencyReducer from './currency/currencyReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
  category: categoryReducer,
});

export default rootReducer;
