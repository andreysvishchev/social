import {v1} from "uuid";
import {ActionsType} from "./redux-store";

let initialState: InitialStateType = {
    dialogs: [
        {id: v1(), name: "Антон"},
        {id: v1(), name: "Андрей"},
        {id: v1(), name: "Лена"},
        {id: v1(), name: "Стас"},
        {id: v1(), name: "Даша"},

    ],
    message: [
        {id: v1(), text: "Привет!"},
        {id: v1(), text: "Привет, как дела?"},
        {id: v1(), text: "Привет!"},
        {id: v1(), text: "Привет!"},
    ],
    newMessageText: "",
};

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            let newMessage = {id: v1(), text: state.newMessageText};
            return {...state, message: [...state.message, newMessage], newMessageText: ''}
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state, newMessageText: action.newText}
        }
        default:
            return state;
    }
};

// action
export const sendMessageAC = () => {
    return {type: "SEND-MESSAGE"} as const
};
export const updateMessageTextAC = (text: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", newText: text} as const
};

// types
type MessageType = {
    id: string;
    text: string;
};
type DialogsType = {
    id: string;
    name: string;
};
export type SendMessageType = ReturnType<typeof sendMessageAC>
export type UpdateMessageTextType = ReturnType<typeof updateMessageTextAC>
export type InitialStateType = {
    dialogs: DialogsType []
    message: MessageType []
    newMessageText: string
}
