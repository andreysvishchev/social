import React from "react";
import style from  './Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={style.Navbar}>
            <div className={style.item}>
                <a className={style.link}> Profile</a>
            </div>
            <div className={style.item}>
                <a className={style.link}>Messages</a>
            </div>
            <div className={style.item}>
                <a className={style.link}>News</a>
            </div>
            <div className={style.item}>
                <a className={style.link}>Music</a>
            </div>
            <div className={style.item}>
                <a className={style.link}>Settings</a>
            </div>
        </nav>
    )
}