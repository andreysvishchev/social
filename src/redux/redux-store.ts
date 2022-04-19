import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profilerReducer";
import {dialogsReducer} from "./dialogsReducer";
import {StoreType} from "./store";

let reducers = combineReducers({
    profilePage:   profileReducer,
    messagePage : dialogsReducer
})

let store : StoreType = createStore(reducers)

export default store