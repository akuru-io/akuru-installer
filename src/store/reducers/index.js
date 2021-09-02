import { combineReducers } from 'redux';
import userReducer from './userSlice';
import fontReducer from './fontSlice';

export default combineReducers({
  user: userReducer,
  fonts : fontReducer,
});
