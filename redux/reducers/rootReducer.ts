import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { contestReducer } from "./contestsReducer";
import { generalReducer } from "./generalReducer";
import { submissionReducer } from "./submissionReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  contest: contestReducer,
  submission: submissionReducer,
  general: generalReducer
});

export type RootState = ReturnType<typeof rootReducer>
