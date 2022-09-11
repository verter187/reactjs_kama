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

function App(props) {
  let menuItems = [
    { profile: Profile },
    { dialogs: Dialogs },
    { news: News },
    { music: Music },
    { settings: Settings },
  ];

  return (
    <BrowserRouter>
      <div className={s.app_wrapper}>
        <Header />
        <Navbar menuItems={menuItems} />

        <div className={s.content}>
          <Routes>
            <Route path={"/Dialogs/:userId"} element={<Dialogs />} />
            {menuItems.map((item) => {
              let name = Object.keys(item)[0];

              return (
                <Route
                  key={Math.random()}
                  path={`/${name}`}
                  element={React.createElement(item[name])}
                  exact
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
