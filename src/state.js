const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

export const store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      newPostText: "sanya krut",
      posts: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Privet hi", likesCount: 1 },
        { id: 3, message: "Helloo fie he", likesCount: 3 },
      ],
    },
    sidebar: {
      friends: [
        { id: 1, name: "Olya" },
        { id: 2, name: "Liza" },
        { id: 3, name: "Tanya" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state changeg");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer , pub-sub
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts = [
        ...this._state.profilePage.posts,
        newPost,
      ];
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: 10,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages = [
        ...this._state.dialogsPage.messages,
        newMessage,
      ];
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    }
  },
};
export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
