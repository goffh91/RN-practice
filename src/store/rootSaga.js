import { all, fork } from "redux-saga/effects";

import authSaga from "./modules/auth/saga";
import chatSaga from "./modules/chat/saga";
import friendSaga from "./modules/friend/saga";

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(chatSaga),
        fork(friendSaga),
    ]);
}
