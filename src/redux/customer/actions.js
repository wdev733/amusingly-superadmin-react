import {
  CUSTOMER_LIST,
  CUSTOMER_LIST_SUCCESS,
  SUSPEND_CUSTOMER,
  SUSPEND_CUSTOMER_SUCCESS,
  IMAGES_LIST,
  IMAGES_LIST_SUCCESS,
  CUSTOMER_ONE,
  CUSTOMER_ONE_SUCCESS,
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER,
  EDIT_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_SUCCESS
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

export const deleteCustomer = (customer) => ({
  type: DELETE_CUSTOMER,
  payload: { customer }
});

export const deleteCustomerSuccess = (customer) => ({
  type: DELETE_CUSTOMER_SUCCESS,
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

export const addCustomer = (customer, history) => ({
  type: ADD_CUSTOMER,
  payload: { customer, history }
})

export const addCustomerSuccess = () => ({
  type: ADD_CUSTOMER_SUCCESS
})

export const editCustomer = (customer, history) => ({
  type: EDIT_CUSTOMER,
  payload: { customer, history }
})

export const editCustomerSuccess = () => ({
  type: EDIT_CUSTOMER_SUCCESS
})
