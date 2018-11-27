import { combineReducers } from "redux";
import authReducer from "./auth";
import photoReducer from "./photos";

const rootReducer = combineReducers({
  authentication: authReducer,
  photos: photoReducer
});

export default rootReducer;
