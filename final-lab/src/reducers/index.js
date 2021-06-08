import {combineReducers} from 'redux';
import usersReducer from "./usersReducer";

//Root Reducer
export default combineReducers({
  users: usersReducer
});