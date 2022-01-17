import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "../features/Auth/reducer";
const rootReducer = combineReducers({
  authState: authReducer
});
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
