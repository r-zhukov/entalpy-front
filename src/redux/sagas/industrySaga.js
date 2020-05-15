import {put} from "redux-saga/effects";
import * as api from "../../api/apiService";
import ACTIONS from "../actions/actionsTypes";

export function* getAllIndustrySaga() {
    yield put({type: ACTIONS.GET_ALL_INDUSTRY_REQUEST});

    try {
        const {data} = yield api.getAllIndustryApi();
        yield put({type: ACTIONS.GET_ALL_INDUSTRY_RESPONSE, allIndustry: data})

    } catch (e) {
        yield put({
            type: ACTIONS.GET_ALL_INDUSTRY_ERRORS,
            message:
                "Something went wrong! Try again later. Sorry, it's not FE developer"
        });
    }
}