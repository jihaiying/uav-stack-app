import React from "react";
import ReactDOM from "react-dom";
import "./global/index.css";
import ForI18n from "./global/ForI18n";
import registerServiceWorker from "./global/registerServiceWorker";
import { Provider } from "react-redux";
import rootReducer from "./global/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import apiMiddleware from "./global/apiMiddleware";

let middlewares = [thunkMiddleware, apiMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

let store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ForI18n />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
