import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { StoreContext } from "../../StoreContext";

export const DialogsContainer = ({ store }) => {

  return (
    <StoreContext.Consumer>
      {(store) => {
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
        )
      }}
    </StoreContext.Consumer>
  );
};

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeMessageText: (body) => {

      const action = updateNewMessageActionCreator(body);
      dispatch(action);
    },
    sendMessage: () => {

      dispatch(addMessageActionCreator());
    }
  }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)