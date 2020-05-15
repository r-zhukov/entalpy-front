import ACTIONS from "../actions/actionsTypes";

const initialState = {
    enterprises: [],
    enterprisesError: null,
    isModalOpen: false,
    isFetching: true

};


export default function (state = initialState, action) {
    switch (action.type) {

        case ACTIONS.GET_ALL_ENTERPRISES_REQUEST:
            return {
                ...state,
                usersError: null,
                isFetching: true,
            };
        case ACTIONS.GET_ALL_ENTERPRISES_RESPONSE:
            return {
                ...state,
                enterprises: action.enterprises,
                isFetching: false,
                isModalOpen: false
            };

        case ACTIONS.GET_ALL_ENTERPRISES_ERRORS:
            return {
                ...state,
                enterprisesError: action.message
            };


        case ACTIONS.CREATE_ENTERPRISE_REQUEST:
            return {
                ...state,
                createUserError: null,
                isFetching: true,
            };

        case ACTIONS.CREATE_ENTERPRISE_RESPONSE:
            return {
                ...state,
                enterprises: action.enterprises,
                isFetching: false,
                isModalOpen: !state.isModalOpen
            };

        case ACTIONS.CREATE_ENTERPRISE_ERROR:
            return {
                ...state,
                createUserError: action.message
            };
        case ACTIONS.IS_MODAL_OPEN:
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            };
        default:
            return state;
    }
};