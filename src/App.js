import s from "./App.module.sass";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Dialogs from "./Components/Dialogs";
import News from "./Components/News";
import Music from "./Components/Music";
import Settings from "./Components/Settings";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className={s.app_wrapper}>
        <Header />
        <Navbar />

        <div className={s.content}>
          <Routes>
            <Route path="/dialogs" element={<Dialogs />} exact />
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/news" element={<News />} exact />
            <Route path="/music" element={<Music />} exact />
            <Route path="/settings" element={<Settings />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
