import ACTIONS from "../actions/actionsTypes";

const initialState = {
    allIndustry: [],
    allIndustryError: null,

};


export default function (state = initialState, action) {
    switch (action.type) {

        case ACTIONS.GET_ALL_INDUSTRY_REQUEST:
            return {
                ...state,
                allIndustryError: null
            };
        case ACTIONS.GET_ALL_INDUSTRY_RESPONSE:
            return {
                ...state,
                allIndustry: action.allIndustry,
            };

        case ACTIONS.GET_ALL_INDUSTRY_ERRORS:
            return {
                ...state,
                allIndustryError: action.message
            };
        default:
            return state;
    }
};