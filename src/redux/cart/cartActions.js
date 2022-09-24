import {
  PRODUCT_ADDED,
  PRODUCT_QUANTITY_CHANGED,
} from './cartTypes';

export const addProduct = product => {
  return { type: PRODUCT_ADDED, payload: product };
};

export const changeQuantity = (id, value) => {
  return { type: PRODUCT_QUANTITY_CHANGED, payload: { id: id, value: value } };
};

