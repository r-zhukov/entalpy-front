import {put, select} from "redux-saga/effects";
import * as api from "../../api/apiService";
import ACTIONS from "../actions/actionsTypes";

export function* getAllEnterprisesSaga() {
    yield put({type: ACTIONS.GET_ALL_ENTERPRISES_REQUEST});

    try {
        const {data} = yield api.getAllEnterprisesApi();
        yield put({type: ACTIONS.GET_ALL_ENTERPRISES_RESPONSE, enterprises: data})

    } catch (e) {
        yield put({
            type: ACTIONS.GET_ALL_ENTERPRISES_ERRORS,
            message:
                "Something went wrong! Try again later. Sorry, it's not FE developer"
        });
    }
}

export function* createEnterpriseSaga(action) {
    console.log("saga");
    yield put({type: ACTIONS.CREATE_ENTERPRISE_REQUEST});
    try {
        const {data} = yield api.createEnterpriseApi(action.body);
        console.log(data);
        const {enterpriseReducer} = yield select();
        const enterprises = [...enterpriseReducer.enterprises, data];
        console.log(enterprises);
        yield  put({type: ACTIONS.CREATE_ENTERPRISE_RESPONSE, enterprises});
    } catch (e) {
        yield put({
            type: ACTIONS.CREATE_ENTERPRISE_ERROR,
            message:
                "Something went wrong! Try again later. Sorry, it's not FE developer"
        });

    }
}