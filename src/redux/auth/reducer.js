import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER
} from "Constants/actionTypes";

const INIT_STATE = {
  user: {
    adminID: localStorage.getItem("adminID"),
    userName: localStorage.getItem("userName"),
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    accessToken: localStorage.getItem("accessToken"),
  },
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      // console.log(state);
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      // notify.success('Login Success');
      return { ...state, loading: false, user: action.payload};
    case REGISTER_USER:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      //notify.success('Register User Success');
      return { ...state, loading: false, user: action.payload.uid };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return { ...state };
  }
};
