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
    currentPage: number
    isFetching: boolean
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 15,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
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
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USER-COUNT":
            return {...state, totalUserCount: action.totalCount}
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export type FollowType = ReturnType<typeof follow>

export type UnfollowType = ReturnType<typeof unfollow>

export type SetUsersType = ReturnType<typeof setUsers>

export type SetCurrentPageType = ReturnType<typeof setCurrentPage>

export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>

export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>

export const follow = (userID: string) => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}

export const unfollow = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        totalCount: totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}



