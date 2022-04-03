import {v1} from "uuid";

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

type MessagePageType = {
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

let rerenderEntireTree = () => {

}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export const addPost = () => {
    let newPost = {id: v1(), text: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const addMessage = () => {
    let newMessage = {id: v1(), text: state.messagePage.newMessageText}
    state.messagePage.message.push(newMessage)
    state.messagePage.newMessageText = ''
    rerenderEntireTree()
}

export const updateNewMessageText = (newText: string) => {
    state.messagePage.newMessageText = newText
    rerenderEntireTree()
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), text: 'Мой первый пост', likesCount: 3},
            {id: v1(), text: 'Мой второй пост', likesCount: 11},
        ],
        newPostText: ''
    },
    messagePage: {
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
}

