import {combineReducers, createStore} from "redux";
import {AddPostType, profileReducer, UpdatePostTextType} from "./profileReducer";
import {dialogsReducer, SendMessageType, UpdateMessageTextType} from "./dialogsReducer";
import {FollowType, SetUsersType, UnfollowType, usersReducers} from "./userReducer";

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
