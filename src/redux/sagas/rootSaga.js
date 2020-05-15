// rootSaga = watcher
import {takeLatest} from "redux-saga/effects";
import ACTIONS from "../actions/actionsTypes";
import * as enterprisesSaga from "./enterprisesSaga";
import * as enterpriseStatusSaga from "./enterpriseStatusSaga";
import * as userSaga from "./userSaga";
import * as industrySaga from "./industrySaga";
import * as corporationSaga from "./corporationSaga";


//WATCHERS
//function* - функция со свездочкой - функция генератор, из нее можно получить несколько результатов

function* rootSaga() {
    //yield takeLatest(WATCHER, function); //takeLatest - берется последний. takeEvery - выполняется каждый раз
    yield takeLatest(ACTIONS.GET_ALL_ENTERPRISES, enterprisesSaga.getAllEnterprisesSaga);
    yield takeLatest(ACTIONS.CREATE_ENTERPRISE, enterprisesSaga.createEnterpriseSaga);
    yield takeLatest(ACTIONS.GET_ALL_ENTERPRISE_STATUS, enterpriseStatusSaga.getAllEnterpriseStatusSaga);
    yield takeLatest(ACTIONS.GET_ALL_INDUSTRY, industrySaga.getAllIndustrySaga);
    yield takeLatest(ACTIONS.GET_ALL_CORPORATION, corporationSaga.getAllCorporationSaga);
    yield takeLatest(ACTIONS.LOGIN, userSaga.loginSaga);
    //yield takeLatest(ACTIONS.GET_CURRENT_USER, userSaga.getCurrentUserSaga);
}

export default rootSaga;