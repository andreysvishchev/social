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
    pageSize: number,
    totalUserCount: number
    currentPages: number
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 15,
    totalUserCount: 0,
    currentPages: 1
}

export const usersReducers = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPages: action.currentPage}
        case "SET-TOTAL-USER-COUNT":
            return {...state, totalUserCount: action.totalCount}
        default:
            return state
    }
}

export type FollowType = ReturnType<typeof followAC>

export type UnfollowType = ReturnType<typeof unfollowAC>

export type SetUsersType = ReturnType<typeof setUsersAC>

export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>

export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}

export const setTotalUsersCountAC =(totalCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        totalCount: totalCount
    } as const
}



