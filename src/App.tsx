import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import './App.scss';

function App() {
    return (

        <div className="App">
            <Header/>

            <div className="App__inner">
                <Navbar/>
                <Profile/>

            </div>

        </div>

    );
}

export default App;
