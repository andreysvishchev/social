import React from 'react';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { Music } from "./components/music/Music";
import { News } from "./components/news/News";
import { Settings } from "./components/settings/Settings";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.scss';
import {StateType} from "./redux/state";


type AppType = {
  state: StateType
}




function App(props: AppType) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="App__inner">
          <Navbar />
          <div className="App__content">
            <Routes>
              <Route path='/Profile'
                element={
                  <Profile
                    PostsData={props.state.profilePage}
                  />
                } />
              <Route path="/Dialogs/*"
                element={
                  <Dialogs
                    MessageData={props.state.messagePage.message}
                    DialogsData={props.state.messagePage.dialogs} />
                } />
              <Route path='/Music' element={<Music />} />
              <Route path='/News' element={<News />} />
              <Route path='/Settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
