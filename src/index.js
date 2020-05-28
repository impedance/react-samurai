import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Privet hi" },
  { id: 3, message: "Helloo fie he" },
];
const users = [
  { name: "Andrey", id: 1 },
  { name: "Julia", id: 2 },
  { name: "Dima", id: 3 },
  { name: "Sveta", id: 4 },
  { name: "Sasha", id: 5 },
  { name: "Masha", id: 6 },
];
const posts = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Privet hi", likesCount: 1 },
  { id: 3, message: "Helloo fie he", likesCount: 3 },
];

ReactDOM.render(
  <React.StrictMode>
    <App users={users} posts={posts} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
