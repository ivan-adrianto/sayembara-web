import { all, call } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { contestSaga } from "./contestSaga";
import { submissionSaga } from "./submissionSaga";

export default function* rootSaga() {
  yield all([call(authSaga), call(contestSaga), call(submissionSaga)]);
}
