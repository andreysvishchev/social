import React from "react";
import style from './Dialog.module.scss'
import {NavLink} from "react-router-dom";
import avatar from './../../../img/1.jpg'


type DialogType = {
    id: string
    name: string
}

const setActive = ({isActive}:{isActive:boolean}):string => {
    return `${style.link} ${isActive ? style.active : ''}`;
}

export const Dialog = (props: DialogType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog}>
            <img src={avatar} alt="avatar" className={style.avatar}/>
            <NavLink className={setActive} to={path}>{props.name}</NavLink>
        </div>
    )
}