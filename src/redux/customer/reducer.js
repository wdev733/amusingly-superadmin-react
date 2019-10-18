import {
  CUSTOMER_LIST,
  CUSTOMER_LIST_SUCCESS,
  SUSPEND_CUSTOMER,
  SUSPEND_CUSTOMER_SUCCESS,
  IMAGES_LIST,
  IMAGES_LIST_SUCCESS,
  CUSTOMER_ONE,
  CUSTOMER_ONE_SUCCESS
} from "Constants/actionTypes";

const INIT_STATE = {
  customerList: [],
  customerId: 0,
  customer: {},
  imageList: [],
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_LIST:
      return { ...state, loading: true };
    case CUSTOMER_LIST_SUCCESS:
      return { ...state, loading: false, customerList: action.payload};
    case IMAGES_LIST:
      return { ...state, loading: true, customerId: action.payload.customerId };
    case IMAGES_LIST_SUCCESS:
      return { ...state, loading: false, imageList: action.payload };
    case SUSPEND_CUSTOMER:
      return { ...state, loading: false };
    case SUSPEND_CUSTOMER_SUCCESS:
      return { ...state, loading: true };
    case CUSTOMER_ONE:
      return { ...state, loading: false, customerId: action.payload.customerId };
    case CUSTOMER_ONE_SUCCESS:
      return { ...state, loading: true, customer: action.payload.customer };
    default:
      return { ...state };
  }
};
