import ACTIONS from "../actions/actionsTypes";

const initialState = {
    allEnterpriseStatus: [],
    allEnterpriseStatusError: null,

};


export default function (state = initialState, action) {
    switch (action.type) {

        case ACTIONS.GET_ALL_ENTERPRISE_STATUS_REQUEST:
            return {
                ...state,
                allEnterpriseStatusError: null
            };
        case ACTIONS.GET_ALL_ENTERPRISE_STATUS_RESPONSE:
            return {
                ...state,
                allEnterpriseStatus: action.allEnterpriseStatus,
            };

        case ACTIONS.GET_ALL_ENTERPRISE_STATUS_ERRORS:
            return {
                ...state,
                allEnterpriseStatusError: action.message
            };
        default:
            return state;
    }
};