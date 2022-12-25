import { all, call } from "redux-saga/effects";
import { authSaga } from "./authSaga";

export default function* rootSaga() {
  yield all([call(authSaga)]);
}
