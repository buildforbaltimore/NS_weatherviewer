import { combineReducers } from "redux";
import { reducer as loginFormReducer } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  form: loginFormReducer,
  auth: authReducer
});
