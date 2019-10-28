import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import customerData from './customer/reducer';
import notification from './notification/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  notification,
  customerData
});

export default reducers;