import * as  ActionTypes from './ActionTypes';
import baseUrl from "../shared/baseUrl";

export const fetchUser = () => (dispatch) => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .then(logins => {
            dispatch(loginSuccess(logins));
        })
        .catch(err => {
            dispatch(loginFailed(err.message));
        })
}

export const postRegisterUser = (name, email, password, password2) => (dispatch) => {
    const jsData = {
        name,
        email,
        password,
        password2
    }
    return fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(jsData),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }).then(response => response.json())
        .then(response => dispatch(addMeme(response)))
        .catch(error => {
            console.log('post comments', error.message);
            alert('Your meme could not be posted\nError: ' + error.message);
        });
}

export const postLoginUser = (name, email, password) => (dispatch) => {
    const jsData = {
        name,
        email,
        password
    }
    return fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(jsData),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }).then(response => response.json())
        .then(response => dispatch(addMeme(response)))
        .catch(error => {
            console.log('post comments', error.message);
            alert('Your meme could not be posted\nError: ' + error.message);
        });
}

export const loginFailed = (errMess) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: errMess
});
export const loginSuccess = (logins) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: logins
});