import { combineReducers } from "redux";
import usersReducer from "./user";

const someApp = combineReducers({
  users: usersReducer
});

export default someApp;
