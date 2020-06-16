import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

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
  subscribe(observer: any) {
    this._callSubscriber = observer; // observer , pub-sub
  },
  dispatch(action: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber();
  },
};
