import ACTIONS from "../actions/actionsTypes";

const initialState = {
    userInfo: false,
    isProgress: false,
    userInfoError: null,
    isLogin: false,

};


export default function (state = initialState, action) {
    switch (action.type) {

        case ACTIONS.LOGIN_REQUEST:
            return {
                ...state,
                userInfoError: null,
                isProgress: true
            };
        case ACTIONS.LOGIN_RESPONSE:
            return {
                ...state,
                userInfo: action.authData.user,
                isProgress: false,
                isLogin: true,
            };

        case ACTIONS.LOGIN_ERRORS:
            return {
                ...state,
                userInfoError: action.data,
                isProgress: false,
            };
        case ACTIONS.GET_CURRENT_USER:
            return {
                ...state,
                userInfo: action.data,
            };

        default:
            return state;
    }
};