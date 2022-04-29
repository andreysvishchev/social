
import {v1} from "uuid";
import {ActionsType} from "./redux-store";

type PostsType = {
    id: string;
    text: string;
    likesCount: number;
};

export type InitialStateType = {
    posts: PostsType []
    newPostText: string
}

let initialState: InitialStateType = {
    posts: [
        {id: v1(), text: 'Мой второй пост', likesCount: 11},
        {id: v1(), text: 'Мой первый пост', likesCount: 3},
    ],
    newPostText: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: v1(), text: state.newPostText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}

export type AddPostType = ReturnType<typeof addPostAC>

export type UpdatePostTextType = ReturnType<typeof updatePostTextAC>

export let addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export let updatePostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}