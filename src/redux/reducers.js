import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import customerData from './customer/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  customerData
});

export default reducers;