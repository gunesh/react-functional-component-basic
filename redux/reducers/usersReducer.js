const initial_state = {
  users: [],
  message:''
};
const usersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "FETCH_USER_START":
      return {
        ...state,
        message: action.payload
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        users: action.payload
      };
    case "FETCH_USER_FAIL":
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
