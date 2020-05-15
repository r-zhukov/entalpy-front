import actions from "./actionsTypes";

export const getAllEnterprisesAction = () => ({
    type: actions.GET_ALL_ENTERPRISES
});

export const getAllUserEnterprisesAction = (userId) => ({
    type: actions.GET_ALL_USER_ENTERPRISES,
    userId: userId
});

export const createEnterpriseAction = (body) => ({
    type: actions.CREATE_ENTERPRISE,
    body: body,
});

export const getAllEnterpriseStatusAction = () => ({
    type: actions.GET_ALL_ENTERPRISE_STATUS,

});

export const getAllIndustryAction = () => ({
    type: actions.GET_ALL_INDUSTRY,

});

export const getAllCorporationAction = () => ({
    type: actions.GET_ALL_CORPORATION,

});

export const loginAction = (data) => ({
    type: actions.LOGIN,
    data
});

export const getCurrentUserAction = (data) => ({
    type: actions.GET_CURRENT_USER,
    data
});

export const isModalOpenAction = () => ({
    type: actions.IS_MODAL_OPEN
});

