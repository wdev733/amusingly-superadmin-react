
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth } from '../../firebase';
import { loginAPI } from '../../services/axios/api';
import { client } from '../../services/axios/apiConfig';
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER
} from 'Constants/actionTypes';

import {
    loginUserSuccess,
    registerUserSuccess
} from './actions';

const loginWithUsernamePasswordAsync = async (username, password) =>
    await loginAPI(username, password)
        .then(authUser => authUser)
        .catch(error => error);

function* loginWithUsernamePassword({ payload }) {
    
    const { username, password } = payload.user;
    const { history } = payload;
    
    try {
        const loginUser = yield call(loginWithUsernamePasswordAsync, username, password);
        
        if (loginUser.data) {
            let success = loginUser.data.success;
            if (success) {
                
                // Save admin info to localStorage
                localStorage.setItem("adminID", loginUser.data.account.AdminID);
                localStorage.setItem("userName", loginUser.data.account.UserName);
                localStorage.setItem("firstName", loginUser.data.account.FirstName);
                localStorage.setItem("lastName", loginUser.data.account.LastName);
                localStorage.setItem('accessToken', loginUser.data.token);

                let authData = {
                    adminID: loginUser.data.account.AdminID,
                    userName: loginUser.data.account.UserName,
                    firstName: loginUser.data.account.FirstName,
                    lastName: loginUser.data.account.LastName,
                    accessToken: loginUser.data.token
                };

                client.defaults.headers.common = {
                    Authorization: `Bearer ${loginUser.data.token}`
                }

                yield put(loginUserSuccess(authData));
                history.push('/');

                return;
            }
        }
        
        console.log('login failed')

    } catch (error) {
        // catch throw
        console.log('login error : ', error)
    }
}

const registerWithEmailPasswordAsync = async (email, password) =>
    await auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);

function* registerWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const { history } = payload
    try {
        const registerUser = yield call(registerWithEmailPasswordAsync, email, password);
        if (!registerUser.message) {
            localStorage.setItem('user_id', registerUser.user.uid);
            yield put(registerUserSuccess(registerUser));
            history.push('/')
        } else {
            // catch throw
            console.log('register failed :', registerUser.message)
        }
    } catch (error) {
        // catch throw
        console.log('register error : ', error)
    }
}



const logoutAsync = async (history) => {
    await auth.signOut().then(authUser => authUser).catch(error => error);
    history.push('/')
}

function* logout({payload}) {
    const { history } = payload
    try {
        yield call(logoutAsync,history);
        localStorage.removeItem('user_id');
    } catch (error) {
    }
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithUsernamePassword);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}


export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser)
    ]);
}