import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import {store} from './store/StateReduser'

export const reRender = () => {
  
  return ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>,
    document.getElementById("root")
  );
};

reRender();

reportWebVitals();