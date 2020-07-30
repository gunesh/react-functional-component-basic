import { combineEpics } from "redux-observable";
import usersEpic from "./usersEpic";
export const rootEpic = combineEpics(usersEpic);

export default rootEpic;
