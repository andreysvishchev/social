import {v1} from "uuid";
import {ActionsType} from "./redux-store";

type LocationType = {
    country: string
    city: string
}

export type UserType = {
    id: string
    followed: boolean
    firstName: string
    lastName: string
    status: string
    avatar: string
    location: LocationType
};

export type InitialStateType = {
    users: UserType []
}

let initialState: InitialStateType = {
    users: [
        {
            id: v1(),
            followed: false,
            firstName: 'Дарья',
            lastName: 'Свищёва',
            status: 'Я босс',
            avatar: 'https://sun9-47.userapi.com/s/v1/if2/9grLRVfvJh7dxZQ1xq8bjOfiLpzFgzoDsRgcgmQdYwYNefLYbGc4cvpFqddDyPPnqGY1N_iLpWQZvCb9Usfz82nV.jpg?size=828x926&quality=95&type=album',
            location: {country: 'Россия', city: 'Москва'}
        },
        {
            id: v1(),
            followed: false,
            firstName: 'Иван',
            lastName: 'Петров',
            status: 'Я люблю футбол',
            avatar: 'https://sun9-3.userapi.com/s/v1/ig2/7D8nwd1N6OsRj8jkCKkbLos4b_CDhLS7hF3mUlF1k45hvOMyTdAvpf5zLPOeCVyzrizqCCijsCoxdHXM8E3kvz_W.jpg?size=2560x1920&quality=96&type=album',
            location: {country: 'Россия', city: 'Нижний Новгород'}
        },
        {
            id: v1(),
            followed: true,
            firstName: 'Антон',
            lastName: 'Антонов',
            status: 'Я босс',
            avatar: 'https://sun9-78.userapi.com/s/v1/if2/rgcbHOBONBX13UlrJInT0T5gAJ7Jg0T-iUqVIx396QJY62nx0e1YXyLcL6uqJqxawom2o9wbspmS_MKXJfE3v4l7.jpg?size=750x1125&quality=96&type=album',
            location: {country: 'Россия', city: 'Санкт-Петербург'}
        }
    ]
}

export const usersReducers = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export type FollowType = {
    type: 'FOLLOW'
    userID: string
}

export type UnfollowType = {
    type: 'UNFOLLOW'
    userID: string
}

export type SetUsersType = {
    type: 'SET-USERS'
    users: UserType[]
}

export const followAC = (userID: string): ActionsType => {
    return {
        type: 'FOLLOW',
        userID: userID
    }
}

export const unfollowAC = (userID: string): ActionsType => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    }
}

export const setUsersAC = (users: UserType[]): ActionsType => {
    return {
        type: 'SET-USERS',
        users: users
    }
}

