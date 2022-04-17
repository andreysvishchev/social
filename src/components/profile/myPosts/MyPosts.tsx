import style from './MyPosts.module.scss'
import {Post} from "./post/Post";
import {ActionsType,  PostsType} from "../../../redux/state";
import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/profilerReducer";


type PostsDataType = {
    PostsData: PostsType[]
    addPost: (action: ActionsType)=> void
    newPostText: string
    updateNewPostText: (action: ActionsType)=> void
}

export const MyPosts = (props: PostsDataType) => {

    let postsMessage = props.PostsData.map(el => {
        return (
            <Post key={el.id} id={el.id} text={el.text} likes={el.likesCount}/>
        )
    })

    let newPostElement = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>

    const addPost = () => {
        props.addPost(addPostAC())
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(updatePostTextAC(text))
    }

    return (
        <div className={style.myPosts}>
            <textarea ref={newPostElement}
                      className={style.textarea}
                      value={props.newPostText}
                      onChange={onPostChange}/>
            <button className={style.button} onClick={addPost}>Добавить запись</button>
            <h3 className={style.myPosts__title}>Мои посты</h3>

            {postsMessage}


        </div>
    )
}
