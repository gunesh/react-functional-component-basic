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


export const saveUserStart = (item) => ({
  type: "SAVE_USER_START",
  payload: item
});
export const saveUserSuccess = (message) => ({
  type: "SAVE_USER_SUCCESS",
  payload: message
});
export const saveUserFail = (message) => ({
  type: "SAVE_USER_FAIL",
  payload: message
});