import React from "react";
import style from './Message.module.scss'


type MessageType = {
    id?: number
    text: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.text}</div>
    )
}