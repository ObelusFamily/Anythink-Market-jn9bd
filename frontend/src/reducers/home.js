import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED, SEARCH_INPUT_CHANGED } from "../constants/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case SEARCH_INPUT_CHANGED:
      return {
        ...state,
        search: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
