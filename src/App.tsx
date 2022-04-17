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
import {ActionsType, StoreType} from "./redux/state";


type AppType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const ProfilePath = './Profile'

function App(props: AppType) {

    const state = props.store.getState()
    const dispatch = props.dispatch
    const profilePage = state.profilePage
    const messagePage = state.messagePage

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
                                        PostsData={profilePage}
                                        addPost={dispatch}
                                        updateNewPostText={dispatch}
                                    />
                                }/>
                            <Route path="/Dialogs/*"
                                   element={
                                       <Dialogs
                                           MessageData={messagePage.message}
                                           DialogsData={messagePage.dialogs}
                                           newMessageText={messagePage.newMessageText}
                                           addMessage={dispatch}
                                           updateNewMessageText={dispatch}
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
