import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProv } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProv store={store}>
        <App />
      </ReduxProv>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
