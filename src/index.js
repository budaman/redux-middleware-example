import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import someApp from "./reducers";
import { BrowserRouter } from "react-router-dom";
import Async from "./middlewares/async";

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(someApp)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
