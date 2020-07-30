import { combineEpics } from "redux-observable";
import usersEpic from "./usersEpic";
import dashEpic from "./usersEpic";
export const rootEpic = combineEpics(usersEpic, dashEpic);

export default rootEpic;
