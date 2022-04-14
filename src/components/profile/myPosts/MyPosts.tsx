import style from './MyPosts.module.scss'
import {Post} from "./post/Post";
import {ActionsType, PostsType} from "../../../redux/state";
import React from 'react';


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
        props.addPost({type: "ADD-POST"})
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText({type: "UPDATE-NEW-POST-TEXT", newText: text})
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
