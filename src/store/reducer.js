import { combineReducers } from "redux";

import authReducer from './modules/auth/reducer';

// Combine reducers with connectRouter which keeps track of router state
const createRootReducer = history =>
    combineReducers({
        auth: authReducer,
    });

export default createRootReducer;