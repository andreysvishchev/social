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

export type StoreType = {
    _state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: ()=> void
    updateNewMessageText: (newText: string) => void
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
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
    },
    getState () {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {id: v1(), text:  this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    addMessage ()  {
        let newMessage = {id: v1(), text: this._state.messagePage.newMessageText}
        this._state.messagePage.message.push(newMessage)
        this._state.messagePage.newMessageText = ''
        this._callSubscriber()
    },
    updateNewMessageText(newText: string) {
        this._state.messagePage.newMessageText = newText
        this._callSubscriber()
    },
    subscribe (observer: () => void) {
        this._callSubscriber = observer
    }

}

export  default store

