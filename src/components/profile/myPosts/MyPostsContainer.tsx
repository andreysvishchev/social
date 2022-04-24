import React from "react";
import {addPostAC, InitialStateType, updatePostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


type MapStateToPropsType = {
    profilePage: InitialStateType
}

type MapDispatchToPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}

export type ProfilePageType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        onPostChange: (text: string) => {
            let action = updatePostTextAC(text);
            dispatch(action);
        }
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
