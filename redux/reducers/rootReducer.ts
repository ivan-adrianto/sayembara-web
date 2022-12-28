import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { contestReducer } from "./contestsReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  contest: contestReducer
});

export type RootState = ReturnType<typeof rootReducer>
