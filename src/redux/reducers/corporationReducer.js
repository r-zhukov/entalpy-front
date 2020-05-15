import ACTIONS from "../actions/actionsTypes";

const initialState = {
    allCorporation: [],
    allCorporationError: null,

};


export default function (state = initialState, action) {
    switch (action.type) {

        case ACTIONS.GET_ALL_CORPORATION_REQUEST:
            return {
                ...state,
                allCorporationError: null
            };
        case ACTIONS.GET_ALL_CORPORATION_RESPONSE:
            return {
                ...state,
                allCorporation: action.allCorporation,
            };

        case ACTIONS.GET_ALL_CORPORATION_ERRORS:
            return {
                ...state,
                allCorporationError: action.message
            };
        default:
            return state;
    }
};