import { CURRENCY_CHANGED } from './currencyTypes';

export const changeCurrency = currency => {
  return { type: CURRENCY_CHANGED, payload: currency };
};
