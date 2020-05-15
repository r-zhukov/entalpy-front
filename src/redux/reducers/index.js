import {combineReducers} from "redux";


import userReducer from "./userReducer";
import industryReducer from "./industryReducer";
import enterpriseReducer from "./enterpriseReducer";
import corporationReducer from "./corporationReducer";
import enterpriseStatusReducer from "./enterpriseStatusReducer";

const appReducer = combineReducers({
    userReducer,
    industryReducer,
    enterpriseReducer,
    corporationReducer,
    enterpriseStatusReducer,

});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;