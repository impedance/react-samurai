import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { News } from "./components/News/News";
import { Friends } from "./components/Friends/Friends";
import { Videos } from "./components/Videos/Videos";

const App = ({ messages, posts, users }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/" component={Profile} />
          <Route path="/profile" render={() => <Profile posts={posts} />} />
          <Route
            exact
            path="/dialogs"
            render={() => <Dialogs messages={messages} users={users} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" component={Friends} />
          <Route path="/videos" component={Videos} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
