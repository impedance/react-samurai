export const state = {
  dialogsPage: {
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
    posts: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Privet hi", likesCount: 1 },
      { id: 3, message: "Helloo fie he", likesCount: 3 },
    ],
  },
  friendsList: {
    friends: [
      { id: 1, name: "Olya" },
      { id: 2, name: "Liza" },
      { id: 3, name: "Tanya" },
    ],
  },
};
