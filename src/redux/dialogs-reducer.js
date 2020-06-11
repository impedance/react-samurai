const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};
const initialState = {
  newMessageText: "",
  messages: [
    { id: 1, message: "Privet hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Helloo fie he" },
  ],
  users: [
    { name: "Andrey", id: 1 },
    { name: "Julia", id: 2 },
    { name: "Dima", id: 3 },
    { name: "Sveta", id: 4 },
    { name: "Sasha", id: 5 },
    { name: "Masha", id: 6 },
  ],
};
export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 10,
        message: state.newMessageText,
      };
      state.messages = [...state.messages, newMessage];
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};
