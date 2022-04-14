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

export type ActionsType = AddPostActionType | UpdateNewPostActionType |  AddMessageActionType | UpdateNewMessageActionType

type AddPostActionType = {
    type: 'ADD-POST'

}
type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
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
        if (action.type === 'ADD-POST') {
            let newPost = {id: v1(), text: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if(action.type === 'ADD-MESSAGE') {
            let newMessage = {id: v1(), text: this._state.messagePage.newMessageText}
            this._state.messagePage.message.push(newMessage)
            this._state.messagePage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagePage.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}

export default store

