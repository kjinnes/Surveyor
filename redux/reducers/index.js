import { combineReducers } from 'redux';
// import surveyReducer from './surveyReducers';
import userReducer from './userReducers';
import cameraReducer from './cameraReducers';
import { visitReducer, pinReducer } from './surveyReducers';
import themeReducer from './themeReducers';

const reducers = {
  user: userReducer,
  camera: cameraReducer,
  visit: visitReducer,
  pin: pinReducer,
  theme: themeReducer,
};

export default combineReducers(reducers);
