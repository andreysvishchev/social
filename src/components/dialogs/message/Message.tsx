import React from "react";
import style from './Message.module.scss'


type MessageType = {
    id: string
    text: string
}

export const Message = (props: MessageType) => {

    return (
        <div className={style.message}>
            <p className={style.text}> {props.text}</p>
        </div>
    )
}