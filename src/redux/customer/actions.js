import {
  CUSTOMER_LIST,
  CUSTOMER_LIST_SUCCESS,
  SUSPEND_CUSTOMER,
  SUSPEND_CUSTOMER_SUCCESS,
  IMAGES_LIST,
  IMAGES_LIST_SUCCESS,
  CUSTOMER_ONE,
  CUSTOMER_ONE_SUCCESS
} from 'Constants/actionTypes';

export const customerList = () => ({
  type: CUSTOMER_LIST,
  payload: {}
});

export const customerListSuccess = (customerList) => ({
  type: CUSTOMER_LIST_SUCCESS,
  payload: customerList
});

export const suspendCustomer = (customer) => ({
  type: SUSPEND_CUSTOMER,
  payload: { customer }
});

export const suspendCustomerSuccess = (customer) => ({
  type: SUSPEND_CUSTOMER_SUCCESS,
  payload: { customer }
});

export const imageList = (customerId) => ({
  type: IMAGES_LIST,
  payload: { customerId }
});

export const imageListSuccess = (imageList) => ({
  type: IMAGES_LIST_SUCCESS,
  payload: imageList
});

export const customerOne = (customerId) => ({
  type: CUSTOMER_ONE,
  payload: { customerId }
});

export const customerOneSuccess = (customer) => ({
  type: CUSTOMER_ONE_SUCCESS,
  payload: { customer }
});
