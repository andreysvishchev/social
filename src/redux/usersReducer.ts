import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {usersApi} from "../api/api";

let initialState: InitialStateType = {
    users: [],
    pageSize: 15,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOW-PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//actions
export const follow = (userID: string) => {
    return {type: 'FOLLOW', userID} as const
}
export const unfollow = (userID: string) => {
    return {type: 'UNFOLLOW', userID} as const
}
export const setUsers = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: 'SET-TOTAL-USER-COUNT', totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}
export const toggleIsFollowProgress = (isFetching: boolean, userId: string) => {
    return {type: 'TOGGLE-IS-FOLLOW-PROGRESS', isFetching, userId} as const
}

//thunk
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}
export const pageChangedTC = (currentPage: number, pageSize: number)=> (dispatch: Dispatch)=> {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
}
export const followTC = (userId: string)=> (dispatch: Dispatch)=> {
    dispatch(toggleIsFollowProgress(true, userId))
    usersApi.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowProgress(false, userId))
        })
}
export const unfollowTC = (userId: string)=> (dispatch: Dispatch)=> {
    dispatch(toggleIsFollowProgress(true, userId))
    usersApi.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleIsFollowProgress(false, userId))
        })
}

// types
export type FollowType = ReturnType<typeof follow>
export type UnfollowType = ReturnType<typeof unfollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowProgressType = ReturnType<typeof toggleIsFollowProgress>
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
    followingInProgress: Array<string>
}