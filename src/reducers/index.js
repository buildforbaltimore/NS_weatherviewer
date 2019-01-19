import { combineReducers } from "redux";
import { reducer as loginFormReducer } from "redux-form";
import authReducer from "./authReducer";
import locationsReducer from "./locationsReducer";

export default combineReducers({
  form: loginFormReducer,
  auth: authReducer,
  locations: locationsReducer
});
