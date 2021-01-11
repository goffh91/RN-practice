import produce from "../../../utils/produce";
import * as authTypes from './type';

export const initialState = {
    loading: false,
    isAuthenticated: false,
    token: null,
    user: null,
}

const authReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            default:
                break;
        }
    });
}

export default authReducer;