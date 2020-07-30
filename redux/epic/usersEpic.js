import { combineEpics, ofType } from "redux-observable";
import {
  switchMap,
  mergeMap,
  catchError,
  withLatestFrom
} from "rxjs/operators";
import { of } from "rxjs";

import {
  fetchUserSuccess,
  fetchUserFail
} from "../actions/usersActions";
import {
  doGetUsersListAPI
} from "./usersApi";

const doUserListEpic = (action$, state$) =>
  action$.pipe(
    ofType('FETCH_USER_START'),
    withLatestFrom(state$),
    switchMap(([action, state]) =>
      doGetUsersListAPI().pipe(
        mergeMap(res => of(fetchUserSuccess(res.response.data))),
        catchError(error => of(fetchUserFail()))
      )
    )
  );


export default combineEpics(
  doUserListEpic
);
