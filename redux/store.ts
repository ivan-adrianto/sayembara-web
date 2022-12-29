// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./sagas/rootSaga";
// import { rootReducer } from "./reducers/rootReducer";
// import {createWrapper} from 'next-redux-wrapper';

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [
//   ...getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: false,
//     thunk: true,
//   }),
//   sagaMiddleware,
// ];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// });

// sagaMiddleware.run(rootSaga);

// export const wrapper = createWrapper(store, {debug: true})

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import rootSaga from "./sagas/rootSaga";
import { rootReducer } from "./reducers/rootReducer";

const bindMiddleware = (middleware: SagaMiddleware<object>[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = {
    ...createStore(rootReducer, bindMiddleware([sagaMiddleware])),
    sagaTask: sagaMiddleware.run(rootSaga),
  };

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
