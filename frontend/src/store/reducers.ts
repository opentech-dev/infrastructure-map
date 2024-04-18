import { reduxAPI } from "@/store/api";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  [reduxAPI.reducerPath]: reduxAPI.reducer,
});

export default rootReducer;
