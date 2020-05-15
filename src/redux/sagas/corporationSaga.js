import {put} from "redux-saga/effects";
import * as api from "../../api/apiService";
import ACTIONS from "../actions/actionsTypes";

export function* getAllCorporationSaga() {
    yield put({type: ACTIONS.GET_ALL_CORPORATION_REQUEST});

    try {
        const {data} = yield api.getAllCorporationApi();
        yield put({type: ACTIONS.GET_ALL_CORPORATION_RESPONSE, allCorporation: data})

    } catch (e) {
        yield put({
            type: ACTIONS.GET_ALL_CORPORATION_ERRORS,
            message:
                "Something went wrong! Try again later. Sorry, it's not FE developer"
        });
    }
}