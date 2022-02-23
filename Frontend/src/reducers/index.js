import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import tutorials from "./tutorial";

export default combineReducers({
  auth,
  message,
  tutorials,
});
