import {combineReducers, createStore} from "redux";
import {AddPostType, profileReducer, UpdatePostTextType} from "./profileReducer";
import {dialogsReducer, SendMessageType, UpdateMessageTextType} from "./dialogsReducer";
import {
    FollowType,
    SetCurrentPageType,
    SetTotalUsersCountType,
    SetUsersType,
    UnfollowType,
    usersReducers
} from "./usersReducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

export type ActionsType =
    | AddPostType
    | UpdatePostTextType
    | SendMessageType
    | UpdateMessageTextType
    | FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
