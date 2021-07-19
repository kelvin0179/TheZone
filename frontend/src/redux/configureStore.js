import { Login } from './login';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            logins: Login,
        }),
        //middleware to keep watch at state user
        applyMiddleware(thunk, logger)
    );
    return store;
}