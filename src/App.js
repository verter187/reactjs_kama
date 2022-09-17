import s from "./App.module.sass";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Dialogs from "./Components/Dialogs";
import News from "./Components/News";
import Music from "./Components/Music";
import Settings from "./Components/Settings";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = ({ state }) => {
  let menuItems = [
    {
      name: "Profile",
      component: Profile,
      id: 1,
      props: { state: state.profilePage },
    },
    {
      name: "Dialogs",
      component: Dialogs,
      id: 2,
      props: { state: state.dialogsPage },
    },
    { name: "News", component: News, id: 3 },
    { name: "Music", component: Music, id: 4 },
    { name: "Settings", component: Settings, id: 5 },
  ];

  return (
    <div className={s.app_wrapper}>
      <Header />
      <Navbar menuItems={menuItems} />

      <div className={s.content}>
        <Routes>
          <Route
            path={"/Dialogs/:userId"}
            element={<Dialogs state={state.dialogsPage} />}
          />
          {menuItems.map((item) => (
            <Route
              key={item.id}
              path={`/${item.name}`}
              element={React.createElement(item.component, item?.props)}
              exact
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
