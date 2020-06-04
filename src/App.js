import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { News } from "./components/News/News";
import { Friends } from "./components/Friends/Friends";
import { Videos } from "./components/Videos/Videos";

const App = ({ state, addPost }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar friends={state.sidebar.friends} />
      <div className="app-wrapper-content">
        <Route
          exact
          path="/"
          render={() => (
            <Profile posts={state.profilePage.posts} addPost={addPost} />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile posts={state.profilePage.posts} addPost={addPost} />
          )}
        />
        <Route
          exact
          path="/dialogs"
          render={() => (
            <Dialogs
              messages={state.dialogsPage.messages}
              users={state.dialogsPage.users}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/friends" component={Friends} />
        <Route path="/videos" component={Videos} />
      </div>
    </div>
  );
};

export default App;
