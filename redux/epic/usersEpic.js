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
  fetchUserFail,
  saveUserSuccess,
  saveUserFail
} from "../actions/usersActions";
import { doGetUsersListAPI, doSaveUsersListAPI } from "./usersApi";

const doUserListEpic = (action$, state$) =>
  action$.pipe(
    ofType("FETCH_USER_START"),
    withLatestFrom(state$),
    switchMap(([action, state]) =>
      doGetUsersListAPI().pipe(
        mergeMap(res => of(fetchUserSuccess(res.response.data))),
        catchError(error => of(fetchUserFail()))
      )
    )
  );

const doUserSaveEpic = (action$, state$) =>
  action$.pipe(
    ofType("SAVE_USER_START"),
    withLatestFrom(state$),
    switchMap(([action, state]) =>
      doSaveUsersListAPI(state.userData.item).pipe(
        mergeMap(res => of(saveUserSuccess("MESSAGE1"))),
        catchError(error => of(saveUserFail("MESSAGE2")))
      )
    )
  )
  ;

export default combineEpics(doUserListEpic, doUserSaveEpic);
