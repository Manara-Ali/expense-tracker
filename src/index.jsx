// 1. IMPORT REACT
import React from "react";

// 2. IMPORT REACTDOM
import ReactDOM from "react-dom";

// 3. ADDITIONAL IMPORTS
import { Provider } from "react-redux";
import { createStore } from "redux";
import ourReducers from "./reducers";
import App from "./components/App";

// Create a store
const store = createStore(ourReducers);

// 4. RENDER COMPONENT TO THE SCREEN
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
