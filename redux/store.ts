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
