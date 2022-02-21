import React from "react";
import style from './Dialogs.module.scss'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {DialogsType, MessageType} from "../../redux/state";


type DialogsPropsType = {
    MessageData: MessageType[]
    DialogsData: DialogsType[]

}

export const Dialogs = (props: DialogsPropsType) => {

    return (

        <div className={style.dialogs}>
            <div className={style.items}>

                {
                   props.DialogsData.map((d, i) => <Dialog key={i} id={d.id} name={d.name}/>)
                }

            </div>
            <div className={style.messages}>
                {
                    props.MessageData.map((m, i) => <Message key={m.id} text={m.text}/>)
                }
            </div>
        </div>
    )
}

