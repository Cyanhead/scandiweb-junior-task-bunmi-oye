import { CATEGORY_CHANGED } from './categoryType';

const initialState = {
  listingCategory: 'all',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_CHANGED:
      return {
        ...state,
        listingCategory: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
