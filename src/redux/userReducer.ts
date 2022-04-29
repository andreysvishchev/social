import {v1} from "uuid";
import {ActionsType} from "./redux-store";


export type UserType = {
    id: string
    followed: boolean
    name: string
    uniqueUrlName: null | string
    status: string | null
    photos: {
        large: null | string
        small: null | string
    }
};

export type InitialStateType = {
    users: UserType []
}

let initialState: InitialStateType = {
    users: []
}

export const usersReducers = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        default:
            return state
    }
}

export type FollowType = ReturnType<typeof followAC>

export type UnfollowType = ReturnType<typeof unfollowAC>

export type SetUsersType = ReturnType<typeof setUsersAC>

export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}

export const unfollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

