import {ActionsType, MessagePageType} from "./state";
import {v1} from "uuid";

export const dialogsReducer = (state: MessagePageType, action: ActionsType) => {

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

export let addMessageAC = () : ActionsType => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export let updateMessageTextAC = (text: string) : ActionsType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: text
    }
}