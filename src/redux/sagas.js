import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import customerSagas from './customer/saga'

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    customerSagas()
  ]);
}
