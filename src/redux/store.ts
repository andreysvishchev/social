import {v1} from "uuid";
import {profileReducer} from "./profilerReducer";
import {dialogsReducer} from "./dialogsReducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type DialogsPageType = {
    message: MessageType[]
    dialogs: DialogsType[]
    newMessageText: string
}

export type ProfilePageType = {
    newPostText: string
    posts: PostsType[]
}

export type MessageType = {
    id: string
    text: string
}

export type DialogsType = {
    id: string
    name: string
}

export type PostsType = {
    id: string
    text: string
    likesCount: number
}

export type ActionsType = AddPostType | UpdatePostTextType | AddMessageType | UpdateMessageTextType

type AddPostType = {
    type: 'ADD-POST'
}
type UpdatePostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
type AddMessageType = {
    type: 'ADD-MESSAGE'
}
type UpdateMessageTextType  = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: string
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), text: 'Мой первый пост', likesCount: 3},
                {id: v1(), text: 'Мой второй пост', likesCount: 11},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}



export default store

