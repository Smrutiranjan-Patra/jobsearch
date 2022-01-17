import { LOGINFAILURE, LOGINSUCCESS } from "./actiontype";
export const loginSuccess = (token) => {
  return {
    type: LOGINSUCCESS,
    payload: token
  };
};
export const loginFailure = () => {
  return {
    type: LOGINFAILURE,
    payload: ""
  };
};

export const signUp = (form) => (dispatch) => {
  const data = fetch("http://localhost:3001/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })
    .then((d) => d.json())
    .then((res) => {
      dispatch(loginSuccess(data.id));
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailure());
    });
};
