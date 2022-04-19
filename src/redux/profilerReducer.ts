import {ActionsType, ProfilePageType} from "./store";
import {v1} from "uuid";

let initialState = {
    posts: [
        {id: v1(), text: 'Мой первый пост', likesCount: 3},
        {id: v1(), text: 'Мой второй пост', likesCount: 11},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: v1(), text: state.newPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export let addPostAC = () : ActionsType => {
    return {
        type: 'ADD-POST'
    }
}

export let updatePostTextAC = (text: string) : ActionsType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}