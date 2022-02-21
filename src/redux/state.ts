import {v1} from "uuid";

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

type MessagePageType = {
    message: MessageType[]
    dialogs: DialogsType[]

}
export type ProfilePageType = {
    posts: PostsType[]
}

export type MessageType = {
    id: number
    text: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id: string
    text: string
    likesCount: number
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), text: 'My first post', likesCount: 3},
            {id: v1(), text: 'My last post', likesCount: 11},
        ],
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Lena'},
            {id: 4, name: 'Stas'}
        ],
        message: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'Hello'},
            {id: 3, text: 'Hello'},
            {id: 4, text: 'Hello'},
        ],
    }
}

