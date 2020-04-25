import { combineReducers } from "redux";
import enterpriseReducer from "./enterpriseReducer";
import userReducer from "./userReducer";
import enterpriseStatusReducer from "./enterpriseStatusReducer";


const appReducer = combineReducers({
    enterpriseReducer, //in this place you should add each new reducer
    userReducer,
    enterpriseStatusReducer,

});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;