import {ActionsType, ProfilePageType} from "../../../redux/store";
import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/profilerReducer";
import {MyPosts} from "./MyPosts";


type PropsType = {
    PostsData: ProfilePageType
    dispatch: (action: ActionsType) => void
}


export const MyPostsContainer = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        let action = updatePostTextAC(text)
        props.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={props.PostsData} />
    )
}
