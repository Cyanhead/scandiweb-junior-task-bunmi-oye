import { CURRENCY_CHANGED } from './currencyTypes';

const initialState = {
  globalCurrency: {},
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_CHANGED:
      return {
        ...state,
        globalCurrency: action.payload,
      };

    default:
      return state;
  }
};

export default currencyReducer;
