import {put} from "redux-saga/effects";
import * as api from "../../api/apiService";
import ACTIONS from "../actions/actionsTypes";
import {history} from "../../utils/history";


export function* loginSaga(action) {

    yield put({type: ACTIONS.LOGIN_REQUEST});
    const authData = action.data;
    try {
        const {data} = yield api.loginApi(authData);
        const user = JSON.stringify(data.user);
        const accessToken = data.token;
        localStorage.setItem('userInfo', user);
        localStorage.setItem('token', accessToken);
        yield put({type: ACTIONS.LOGIN_RESPONSE, authData: data});
        history.push('/')


    } catch (e) {
        yield put({
            type: ACTIONS.LOGIN_ERRORS,
            data: e.message,

        });

    }
}

