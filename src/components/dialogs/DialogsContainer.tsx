import React from "react";
import style from './Dialogs.module.scss'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {DialogsType, MessageType, StoreType} from "../../redux/store";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage
    const sendMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const onMessageChange = (body: string) => {

        props.store.dispatch(updateMessageTextAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onMessageChange} addMessage={sendMessage} dialogsPage={state}
        />
    )
}

