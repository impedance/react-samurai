import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/redux-store";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
// import { store } from "./redux/store";

export const reRenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          store={store}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

reRenderEntireTree(store.getState());
store.subscribe(() => reRenderEntireTree(store.getState()));
