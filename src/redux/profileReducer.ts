import {v1} from "uuid";
import {ActionsType} from "./redux-store";

type PostsType = {
    id: string;
    text: string;
    likesCount: number;
};

export type ProfileType = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export type InitialStateType = {
    posts: PostsType []
    newPostText: string
   profile: ProfileType
}

let initialState: InitialStateType = {
    posts: [
        {id: v1(), text: 'Мой второй пост', likesCount: 11},
        {id: v1(), text: 'Мой первый пост', likesCount: 3},
    ],
    newPostText: '',
    profile: {
        aboutMe: "я круто чувак 1001 % ",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
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
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export type AddPostType = ReturnType<typeof addPostAC>

export type UpdatePostTextType = ReturnType<typeof updatePostTextAC>

export type setUserProfileType = ReturnType<typeof setUserProfile>

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

export let setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
       profile: profile
    } as const
}