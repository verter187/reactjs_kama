import s from "./App.module.sass";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Dialogs from "./Components/Dialogs";
import News from "./Components/News";
import Music from "./Components/Music";
import Settings from "./Components/Settings";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = ({ posts, dialogs }) => {
  let menuItems = [
    { profile: Profile, id: 1, props: { posts: posts } },
    { dialogs: Dialogs, id: 2, props: { dialogs: dialogs } },
    { news: News, id: 3 },
    { music: Music, id: 4 },
    { settings: Settings, id: 5 },
  ];

  return (
    <BrowserRouter>
      <div className={s.app_wrapper}>
        <Header />
        <Navbar menuItems={menuItems} />

        <div className={s.content}>
          <Routes>
            <Route
              path={"/Dialogs/:userId"}
              element={<Dialogs dialogs={dialogs} />}
            />
            {menuItems.map((item) => {
              let name = Object.keys(item)[0];

              return (
                <Route
                  key={Math.random()}
                  path={`/${name}`}
                  element={React.createElement(item[name], item?.props)}
                  exact
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
