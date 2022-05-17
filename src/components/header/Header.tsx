import logo from "../../img/logo-social.png";
import style from './Header.module.scss'
import React from "react";
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";



export const Header = (props: AuthPropsType) => {
    return (
        <header className={style.header}>
            <img src={logo} alt="" className={style.logo}/>

            <div className={style.login}>

                {props.isAuth ? props.data.login : <NavLink to="/login">Войти</NavLink>}

            </div>
        </header>
    )
}