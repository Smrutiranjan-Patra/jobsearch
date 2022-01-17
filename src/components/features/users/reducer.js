import { LOGINFAILURE, LOGINSUCCESS } from "./actiontype";

let initState = {
  isAuth: false,
  userid: ""
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGINSUCCESS:
      return {
        ...state,
        isAuth: true,
        userid: payload
      };
    case LOGINFAILURE:
      return {
        ...state,
        isAuth: false,
        userid: ""
      };
    default:
      return state;
  }
};
