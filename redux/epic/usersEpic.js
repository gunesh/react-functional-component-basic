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
} from "../actions/usersAction";
import {
  doDashboardListAPI
} from "./usersApi";

const doUserListEpic = (action$, state$) =>
  action$.pipe(
    ofType('FETCH_USER_START'),
    withLatestFrom(state$),
    switchMap(([action, state]) =>
      doDashboardListAPI().pipe(
        mergeMap(res => of(fetchUserSuccess(res.response.data))),
        catchError(error => of(fetchUserFail()))
      )
    )
  );


export default combineEpics(
  doUserListEpic
);
