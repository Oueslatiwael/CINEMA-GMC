import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import "./fonts/CircularStd-Black.ttf";
//import "./fonts/CircularStd-Medium.ttf";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./JS/store/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
