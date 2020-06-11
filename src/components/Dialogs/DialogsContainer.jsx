import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = ({ store }) => {
  const state = store.getState();
  const changeMessageText = (body) => {
    const action = updateNewMessageActionCreator(body);
    store.dispatch(action);
  };
  const sendMessage = () => {
    store.dispatch(addMessageActionCreator());
  };

  return (
    <Dialogs
      messages={state.dialogsPage.messages}
      sendMessage={sendMessage}
      changeMessageText={changeMessageText}
      users={state.dialogsPage.users}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};
