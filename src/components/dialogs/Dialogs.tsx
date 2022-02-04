import React from "react";
import style from './Dialogs.module.scss'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";




export const Dialogs = () => {
    return (

        <div className={style.dialogs}>
            <div className={style.dialogs__items}>

                        <Dialog id="1" name="Andrey"/>



                <Dialog id="2" name="Dasha"/>
                <Dialog id="3" name="Oleg"/>
                <Dialog id="4" name="Anton"/>

            </div>
            <div className={style.messages}>
               <Message text="Привет как дела?"/>
               <Message text="Привет как дела?"/>
               <Message text="Привет как дела?"/>
               <Message text="Привет как дела?"/>
            </div>
        </div>
    )
}

