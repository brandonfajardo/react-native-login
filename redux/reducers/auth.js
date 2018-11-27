import { LOGIN_SUCCESS } from "../actions/types";
const initialState = {
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        user: payload
      };
    }
    default:
      return state;
  }
};
