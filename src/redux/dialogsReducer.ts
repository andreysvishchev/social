import {ActionsType, DialogsPageType} from "./store";
import {v1} from "uuid";

let initialState = {
    dialogs: [
        {id: v1(), name: 'Антон'},
        {id: v1(), name: 'Андрей'},
        {id: v1(), name: 'Лена'},
        {id: v1(), name: 'Стас'}
    ],
    message: [
        {id: v1(), text: 'Привет!'},
        {id: v1(), text: 'Привет, как дела?'},
        {id: v1(), text: 'Привет!'},
        {id: v1(), text: 'Привет!'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {id: v1(), text: state.newMessageText}
            state.message.push(newMessage)
            state.newMessageText = ''
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export let addMessageAC = (): ActionsType => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export let updateMessageTextAC = (text: string): ActionsType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: text
    }
}