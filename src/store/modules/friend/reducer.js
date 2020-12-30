import produce from "../../../utils/produce";
import * as friendTypes from './type';

export const initialState = {
}

const friendReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            default:
                break;
        }
    });
}

export default friendReducer;