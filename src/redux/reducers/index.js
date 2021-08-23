import { combineReducers } from "redux";
import {userReducer} from '../reducers/userReducer';
const reducers = combineReducers({
  user: userReducer
});

console.log('userReducer in root reducer',userReducer);

export default reducers;