import React, {ChangeEvent, FormEvent, useState} from "react";
import style from './Dialogs.module.scss'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {ActionsType, DialogsType, MessageType} from "../../redux/state";


type DialogsPropsType = {
    MessageData: MessageType[]
    DialogsData: DialogsType[]
    addMessage: (action: ActionsType)=> void
    updateNewMessageText: (action: ActionsType)=> void
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogList = props.DialogsData.map(el => {
        return (
            <Dialog key={el.id} id={el.id} name={el.name}/>
        )
    })

    const messageList = props.MessageData.map(el => {
        return (
            <Message key={el.id} id={el.id} text={el.text}/>
        )
    })

    let newMessageElement = React.createRef() as React.MutableRefObject<HTMLTextAreaElement>

    const sendMessage = () => {
        props.addMessage({type: "ADD-MESSAGE"})
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text})
    }


    return (
        <div className={style.inner}>
            <div className={style.dialogs}>
                {dialogList}
            </div>
            <div className={style.messages}>
                {messageList}
                <div className={style.addMessage}>
                    <textarea ref={newMessageElement} value={props.newMessageText} className={style.textarea} onChange={onMessageChange}/>
                    <button onClick={sendMessage} className={style.button}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

