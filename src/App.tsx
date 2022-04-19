import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import './App.scss';
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";


type AppType = {
    store: StoreType
}

const ProfilePath = './Profile'

function App(props: AppType) {



    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="App__inner">
                    <Navbar/>
                    <div className="App__content">
                        <Routes>
                            <Route path='/' element={<Navigate to={ProfilePath}/>}/>
                            <Route
                                path='/Profile'
                                element={
                                    <Profile
                                    store={props.store}

                                    />
                                }/>
                            <Route path="/Dialogs/*"
                                   element={
                                       <DialogsContainer
                                           store={props.store}
                                       />
                                   }/>
                            <Route path='/Music' element={<Music/>}/>
                            <Route path='/News' element={<News/>}/>
                            <Route path='/Settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
