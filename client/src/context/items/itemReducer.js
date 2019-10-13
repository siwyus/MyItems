import {
  ADD_ITEM,
  GET_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ITEM_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_ITEMS
} from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
        loading: false
      };
    case GET_ITEM:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ITEM_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item._id === action.payload._id ? action.payload : item
        ),
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
        loading: false
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        items: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
