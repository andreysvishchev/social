import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import './App.scss';
import {StateType} from "./redux/state";


type AppType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}


function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="App__inner">
                    <Navbar/>
                    <div className="App__content">
                        <Routes>
                            <Route path='/Profile'
                                   element={
                                       <Profile
                                           PostsData={props.state.profilePage}
                                           addPost={props.addPost}
                                           updateNewPostText={props.updateNewPostText}
                                       />
                                   }/>
                            <Route path="/Dialogs/*"
                                   element={
                                       <Dialogs
                                           MessageData={props.state.messagePage.message}
                                           DialogsData={props.state.messagePage.dialogs}
                                           newMessageText={props.state.messagePage.newMessageText}
                                           addMessage={props.addMessage}
                                           updateNewMessageText={props.updateNewMessageText}
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
