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


type AppType = {
    messageData: MessageDataType[]
    dialogsData: DialogsDataType[]
}

export type MessageDataType = {
    id: number
    text: string
}

export type DialogsDataType = {
    id: number
    name: string
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
                            <Route path='/Profile' element={<Profile/>}/>
                            <Route path="/Dialogs/*"
                                   element={
                                       <Dialogs
                                           MessageData={props.messageData}
                                           DialogsData={props.dialogsData}/>
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
