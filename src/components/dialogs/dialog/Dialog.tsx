import React from "react";
import style from './Dialog.module.scss'
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string,
    id: string
}


export const Dialog = (props: DialogType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}