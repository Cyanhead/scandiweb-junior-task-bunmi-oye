import { CATEGORY_CHANGED } from './categoryType';

export const changeCategory = category => {
  return { type: CATEGORY_CHANGED, payload: category };
};
