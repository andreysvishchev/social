import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.scss";
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    const dialogList = state.dialogs.map((el) => {
        return <Dialog key={el.id} id={el.id} name={el.name}/>;
    });

    const messageList = state.message.map((el) => {
        return <Message key={el.id} id={el.id} text={el.text}/>;
    });

    let newMessageElement =
        React.createRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const sendMessage = () => {
        props.sendMessage()
    };

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.onMessageChange(body)
    };

    return (
        <div className={style.inner}>
            <div className={style.dialogs}>{dialogList}</div>
            <div className={style.messages}>
                {messageList}
                <div className={style.addMessage}>
          <textarea ref={newMessageElement}
                    placeholder={"Напишите сообщение..."}
                    value={state.newMessageText}
                    className={style.textarea}
                    onChange={onMessageChange}/>
                    <button onClick={sendMessage} className={style.button}>
                        Отправить сообщение
                    </button>
                </div>
            </div>
        </div>
    );
};
