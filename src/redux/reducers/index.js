import { combineReducers } from "redux";
import enterpriseReducer from "./enterpriseReducer";


const appReducer = combineReducers({
    enterpriseReducer, //in this place you should add each new reducer

});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;