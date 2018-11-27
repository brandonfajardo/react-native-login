import { GET_PHOTOS_PENDING, GET_PHOTOS_SUCCESS } from "../actions/types";
const initialState = {
  pending: false,
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PHOTOS_PENDING: {
      return {
        ...state,
        pending: true
      };
    }
    case GET_PHOTOS_SUCCESS: {
      return {
        pending: false,
        list: payload
      };
    }
    default:
      return state;
  }
};
