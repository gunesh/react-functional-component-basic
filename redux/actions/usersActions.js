export const fetchUserStart = (message) => ({
  type: "FETCH_USER_START",
  payload: message
});
export const fetchUserSuccess = (users) => ({
  type: "FETCH_USER_SUCCESS",
  payload: users
});
export const fetchUserFail = (message) => ({
  type: "FETCH_USER_FAIL",
  payload: message
});