import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from './modules/auth/reducer';
import chatReducer from './modules/chat/reducer';
import friendReducer from './modules/friend/reducer';

// Combine reducers with connectRouter which keeps track of router state
const createRootReducer = history =>
    combineReducers({
        auth: authReducer,
        chat: chatReducer,
        friend: friendReducer,
        router: connectRouter(history)
    });

export default createRootReducer;