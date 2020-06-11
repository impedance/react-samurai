const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
const initialState = {
  newPostText: "sanya krut",
  posts: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Privet hi", likesCount: 1 },
    { id: 3, message: "Helloo fie he", likesCount: 3 },
  ],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts = [...state.posts, newPost];
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
