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
import {StoreType} from "./redux/state";


type AppType = {
    store: StoreType
}

const ProfilePath = './Profile'

function App(props: AppType) {
    const state = props.store.getState()


    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="App__inner">
                    <Navbar/>
                    <div className="App__content">
                        <Routes>
                            <Route path={'/'} element={<Navigate to={ProfilePath}/>}/>

                        {/*    <Profile
                                PostsData={state.profilePage}
                                addPost={props.store.addPost.bind(props.store)}
                                updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                            />*/}
                            <Route path="/Dialogs/*"
                                   element={
                                       <Dialogs
                                           MessageData={state.messagePage.message}
                                           DialogsData={state.messagePage.dialogs}
                                           newMessageText={state.messagePage.newMessageText}
                                           addMessage={props.store.addMessage.bind(props.store)}
                                           updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
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
