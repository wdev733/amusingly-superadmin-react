
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
	customerListAPI,
	instaImageListByCustomerAPI,
	suspendCustomerAPI,
	customerOneAPI,
	addCustomerAPI,
	editCustomerAPI

} from '../../services/axios/api';
import {
	CUSTOMER_LIST,
	IMAGES_LIST,
	SUSPEND_CUSTOMER,
	CUSTOMER_ONE,
	ADD_CUSTOMER,
	EDIT_CUSTOMER
} from 'Constants/actionTypes';

import {
	customerList,
	customerListSuccess,
	imageListSuccess,
	customerOneSuccess,
	addCustomerSuccess,
	showNotification,
	editCustomerSuccess,
} from '../actions';

const getCustomerListAsync = async () =>
	await customerListAPI()
		.then(result => result)
		.catch(error => error);

function* getCustomerList() {
	try {
		const result = yield call(getCustomerListAsync);

		if (result.data.success) {

			yield put(customerListSuccess(result.data.data));
			return;
		}

		console.log('Error!!!')

	} catch (error) {
		// catch throw
		console.log('customer list error : ', error)
	}
}

const getInstaImagesListAsync = async (customerId) =>
	await instaImageListByCustomerAPI(customerId)
		.then(result => result)
		.catch(error => error);

function* getInstaImageList({ payload }) {

	const { customerId } = payload;

	try {
		const result = yield call(getInstaImagesListAsync, customerId);

		if (result.data.success) {
			yield put(imageListSuccess(result.data.data));
			return;
		}
		console.log('Error!!!')
	} catch (error) {
		// catch throw
		console.log('insta image list list error : ', error)
	}
}

const suspendCustomerAsync = async (customerId, status) =>
	await suspendCustomerAPI(customerId, status)
		.then(result => result)
		.catch(error => error);

function* suspendCustomer({ payload }) {

	const customerId = payload.customer.CustomerID;
	const status = payload.customer.Status;

	try {
		const result = yield call(suspendCustomerAsync, customerId, status);

		if (result.data.success) {

			yield put(customerList());
			return;
		}

		console.log('Error!!!')

	} catch (error) {
		// catch throw
		console.log('customer list error : ', error)
	}
}

const getCustomerOneAsync = async (customerId) =>
	await customerOneAPI(customerId)
		.then(result => result)
		.catch(error => error);

function* getCustomerOne({ payload }) {

	const { customerId } = payload;

	try {
		const result = yield call(getCustomerOneAsync, customerId);

		if (result.data.success) {
			yield put(customerOneSuccess(result.data.data));
			return;
		}
		console.log('Error!!!')
	} catch (error) {
		// catch throw
		console.log('get customer error : ', error)
	}
}

const addCustomerAsync = async (customer) => 
	await addCustomerAPI(customer)
		.then(result => result)
		.catch(error => error);

function* addCustomer({ payload }) {
	try {
		
		const { customer, history } = payload;
		
		const result = yield call(addCustomerAsync, customer);
		// console.log("*******");
		// console.log(result);
		if (result.data.success) {

			if (result.data.data.result) {
				yield put(addCustomerSuccess());
				history.push('/customer/list');
			} else {
				yield put(showNotification('error', result.data.data.message));
			}
			
			return;
		}

		console.log('Error!!!')

	} catch (error) {
		// catch throw
		console.log('customer list error : ', error)
	}
}

const editCustomerAsync = async (customer) =>
	await editCustomerAPI(customer)
		.then(result => result)
		.catch(error => error);

function* editCustomer({ payload }) {
	try {

		const { customer, history } = payload;

		const result = yield call(editCustomerAsync, customer);

		if (result.data.success) {

			if (result.data.data.result) {
				yield put(editCustomerSuccess());
				history.push('/customer/list');
			} else {
				yield put(showNotification('error', result.data.data.message));
			}

			return;
		}

		console.log('Error!!!')

	} catch (error) {
		// catch throw
		console.log('customer list error : ', error)
	}
}

export function* watchCustomerList() {
	yield takeEvery(CUSTOMER_LIST, getCustomerList);
}

export function* watchImageList() {
	yield takeEvery(IMAGES_LIST, getInstaImageList);
}

export function* watchSuspendCustomer() {
	yield takeEvery(SUSPEND_CUSTOMER, suspendCustomer);
}

export function* watchCustomerOne() {
	yield takeEvery(CUSTOMER_ONE, getCustomerOne);
}

export function* watchAddCustomer() {
	yield takeEvery(ADD_CUSTOMER, addCustomer);
}

export function* watchEditCustomer() {
	yield takeEvery(EDIT_CUSTOMER, editCustomer);
}

export default function* rootSaga() {
	yield all([
		fork(watchCustomerList),
		fork(watchImageList),
		fork(watchSuspendCustomer),
		fork(watchCustomerOne),
		fork(watchAddCustomer),
		fork(watchEditCustomer)
	]);
}