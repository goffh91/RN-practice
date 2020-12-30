import produce from "../../../utils/produce";
import * as chatTypes from './type';

export const initialState = {
}

const chatReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            default:
                break;
        }
    });
}

export default chatReducer;