import {
  PRODUCT_ADDED,
  PRODUCT_QUANTITY_CHANGED,
  PRODUCT_ATTRIBUTE_CHANGED,
  PRODUCT_COLOR_CHANGED,
} from './cartTypes';

export const addProduct = product => {
  return { type: PRODUCT_ADDED, payload: product };
};

export const changeQuantity = (id, value) => {
  return { type: PRODUCT_QUANTITY_CHANGED, payload: { id: id, value: value } };
};

export const changeSize = (id, size) => {
  return { type: PRODUCT_ATTRIBUTE_CHANGED, payload: { id: id, size: size } };
};

export const changeColor = (id, color) => {
  return { type: PRODUCT_COLOR_CHANGED, payload: { id: id, color: color } };
};
