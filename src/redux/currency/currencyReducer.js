// import { changeCurrency } from './currencyActions';
import { CURRENCY_CHANGED } from './currencyTypes';

// const changeGlobalCurrency = () => {};

const initialState = {
  globalCurrency: {},
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_CHANGED:
      console.log('currency changed to', action.payload);
      return {
        ...state,
        globalCurrency: action.payload,
      };

    default:
      return state;
  }
};

export default currencyReducer;
