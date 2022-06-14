import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {usersApi} from "../api/api";

let initialState: InitialStateType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, data: {...action.data}, isAuth: true}
        default:
            return state
    }
}

// action
export const setUserDataAC = (id: number, login: string, email: string) => {
    return {type: 'SET-USER-DATA', data: {id, login, email}} as const
}

// thunk
export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    usersApi.auth()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
               dispatch(setUserDataAC(id, login, email))
            }
        })
}

// types
export type setUserDataActionType = ReturnType<typeof setUserDataAC>
export  type DataType = {
    id: null | number
    login: null | string
    email: null | string
}
export type InitialStateType = {
    data: DataType,
    messages: [],
    fieldsErrors: [],
    resultCode: number
    isAuth: boolean
}



