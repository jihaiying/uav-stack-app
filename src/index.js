import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ForI18n from "./components/ForI18n";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import apiMiddleware from "./middleware/api";

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
