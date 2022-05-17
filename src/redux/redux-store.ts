import {combineReducers, createStore} from "redux";
import {AddPostType, profileReducer, setUserProfileType, UpdatePostTextType} from "./profileReducer";
import {dialogsReducer, SendMessageType, UpdateMessageTextType} from "./dialogsReducer";
import {
    FollowType,
    SetCurrentPageType,
    SetTotalUsersCountType,
    SetUsersType, toggleIsFetchingType,
    UnfollowType,
    usersReducers
} from "./usersReducer";
import {authReducer, setUserDataActionType} from "./authReducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers,
    auth: authReducer
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
    | toggleIsFetchingType
    | setUserProfileType
    | setUserDataActionType
