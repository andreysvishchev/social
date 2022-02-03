import logo from "../../img/logo-social.png";
import style from './Header.module.scss'
import React from "react";

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt="" className={style.logo}/>
        </header>
    )
}