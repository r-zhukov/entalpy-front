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