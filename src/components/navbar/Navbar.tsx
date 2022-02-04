import React from "react";
import style from  './Navbar.module.scss'
import {NavLink} from "react-router-dom";





const setActive = ({isActive}:{isActive:boolean}):string => {
    return `${style.link} ${isActive ? style.active : ''}`;
}

export const Navbar = () => {
    return (
        <nav className={style.Navbar}>
            <div className={style.item}>
                <NavLink to="/Profile" className={setActive} > Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Dialogs" className={setActive}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/News" className={setActive}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Music" className={setActive}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Settings" className={setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}