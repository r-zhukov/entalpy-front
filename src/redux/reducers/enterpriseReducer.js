import ACTIONS from "../actions/actionsTypes";

const initialState = {
    enterprises: [],
    enterprisesError: null,

};


export default function (state = initialState, action) {
    switch (action.type) {

        case ACTIONS.GET_ALL_ENTERPRISES_REQUEST:
            return {
                ...state,
                usersError: null
            };
        case ACTIONS.GET_ALL_ENTERPRISES_RESPONSE:
            return {
                ...state,
                enterprises: action.enterprises,
            };

        case ACTIONS.GET_ALL_ENTERPRISES_ERRORS:
            return {
                ...state,
                enterprisesError: action.message
            };


        case ACTIONS.CREATE_ENTERPRISE_REQUEST:
            return {
                ...state,
                createUserError: null
            };

        case ACTIONS.CREATE_ENTERPRISE_RESPONSE:
            return {
                ...state,
                enterprises: action.enterprises,
            };

        case ACTIONS.CREATE_ENTERPRISE_ERROR:
            return {
                ...state,
                createUserError: action.message
            };
        default:
            return state;
    }
};