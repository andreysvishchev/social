import React from "react";
import style from './Navbar.module.scss'
import {NavLink} from "react-router-dom";


const setActive = ({isActive}: { isActive: boolean }): string => {
    return `${style.link} ${isActive ? style.active : ''}`;
}

export const Navbar = () => {
    return (
        <nav className={style.Navbar}>
            <div className={style.item}>
                <NavLink to="/Profile" className={setActive}> Профиль</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Dialogs" className={setActive}>Сообщения</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/News" className={setActive}>Новости</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Music" className={setActive}>Музыка</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Users" className={setActive}>Найти друзей</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Settings" className={setActive}>Настройки</NavLink>
            </div>
        </nav>
    )
}