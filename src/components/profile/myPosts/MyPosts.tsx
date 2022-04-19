import style from './MyPosts.module.scss'
import {Post} from "./post/Post";
import {ProfilePageType} from "../../../redux/store";
import React from 'react';


type PropsType = {
    postsData: ProfilePageType
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts = (props: PropsType) => {

    const postsData = props.postsData.posts
    const newPostText = props.postsData.newPostText

    let postsMessage = postsData.map(el => {
        return (
            <Post key={el.id} id={el.id} text={el.text} likes={el.likesCount}/>
        )
    })

    let newPostElement = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>

    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={style.myPosts}>
            <textarea ref={newPostElement}
                      className={style.textarea}
                      value={newPostText}
                      onChange={onPostChange}/>
            <button className={style.button} onClick={onAddPost}>Добавить запись</button>
            <h3 className={style.myPosts__title}>Мои посты</h3>
            {postsMessage}
        </div>
    )
}
