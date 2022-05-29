import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import './App.scss';
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

import {UsersContainer} from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";




function App() {

    const ProfilePath = '/Profile'

    return (
        <BrowserRouter>
            <div className="App">
              <HeaderContainer/>
                <div className="App__inner">
                    <Navbar/>
                    <div className="App__content">
                        <Routes>
                            <Route path='/' element={<Navigate to={ProfilePath}/>}/>
                            <Route path="/:userId" element={<ProfileContainer />} />
                            <Route path="/profile/:userId" element={<ProfileContainer />} />


                            <Route path="/login" element={<Login/>}/>

                            <Route path="/Dialogs/*" element={<DialogsContainer/>}/>
                            <Route path='/Music' element={<Music/>}/>
                            <Route path='/News' element={<News/>}/>
                            <Route path='/Users' element={<UsersContainer/>}/>
                            <Route path='/Settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
