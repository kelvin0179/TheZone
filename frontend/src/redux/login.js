import * as ActionTypes from './ActionTypes';

export const Login = (state = {
    errMess: null,
    logins: []
}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return { ...state, errMess: null, logins: action.payload };
        case ActionTypes.LOGIN_FAILED:
            return { ...state, errMess: action.payload };
        default:
            return state;
    }
}