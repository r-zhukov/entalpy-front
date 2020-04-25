import {put, select} from "redux-saga/effects";
import * as api from "../../api/apiService";
import ACTIONS from "../actions/actionsTypes";

export function* getAllEnterpriseStatusSaga() {
    console.log("saga1");
    yield put({type: ACTIONS.GET_ALL_ENTERPRISE_STATUS_REQUEST});

    try {
        const {data} = yield api.getAllEnterpriseStatusApi();
        yield put({type: ACTIONS.GET_ALL_ENTERPRISE_STATUS_RESPONSE, allEnterpriseStatus: data})

    } catch (e) {
        yield put({
            type: ACTIONS.GET_ALL_ENTERPRISE_STATUS_ERRORS,
            message:
                "Something went wrong! Try again later. Sorry, it's not FE developer"
        });
    }
}