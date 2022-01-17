import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../components/features/users/reducer";
// import { reducer as authReducer } from ".";
const rootReducer = combineReducers({
  authState: reducer
});
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
