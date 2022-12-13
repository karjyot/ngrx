import * as model from "./model";
import * as actions from "./action";

const postInitialState = (function(): model.ProductState {
  const state: model.ProductState = {
    products: []
  };
  return state;
})();

export function reducer(state = postInitialState, action: actions.Actions) {
  switch (action.type) {
    case actions.actionType.GET_PRODUCT_LIST_SUCCESS: {
      return Object.assign({}, state, { products: action.payload });
    }
    default: {
      return state;
    }
  }
}