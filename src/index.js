import React from 'react';
import ReactDOM from "react-dom";
import { store } from "./redux/redux-store";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
// import { store } from "./redux/store";
import { Provider } from 'react-redux';

export const reRenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>

      <Provider store={store}>

        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

reRenderEntireTree(store.getState());
store.subscribe(() => reRenderEntireTree(store.getState()));
