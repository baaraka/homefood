import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  modals: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.modals.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          modals: state.modals.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          modals: [...state.modals, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        modals: state.modals.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
