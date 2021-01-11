import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import createRootReducer from "./reducer";
import rootSaga from "./rootSaga";

const isDebug = (process.env.NODE_ENV === "development");

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
export default function configureStore(initialState, history) {
    let store;
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [thunk, sagaMiddleware];

    if (isDebug) {
        middleware.push(createLogger());
        store = createStore(
            createRootReducer(history),
            initialState,
            composeWithDevTools(applyMiddleware(...middleware))
        );
    } else {
        store = createStore(
            createRootReducer(history),
            initialState,
            compose(applyMiddleware(...middleware), f => f)
        );
    }

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("reducers", () => {
            const nextReducer = require("./reducer");
            store.replaceReducer(nextReducer);
        });
    }
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}