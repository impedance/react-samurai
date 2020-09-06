import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";

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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)