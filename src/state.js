export const state = {
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
};
export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts = [...state.profilePage.posts, newPost];
  updateNewPostText("");
  reRenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  reRenderEntireTree(state);
};
export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  reRenderEntireTree(state);
};
export const addMessage = () => {
  const newMessage = {
    id: 10,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages = [...state.dialogsPage.messages, newMessage];
  updateNewMessageText("");
  reRenderEntireTree(state);
};
let reRenderEntireTree = () => {
  console.log("state changeg");
};
export const subscribe = (observer) => {
  reRenderEntireTree = observer; // observer , pub-sub
};
