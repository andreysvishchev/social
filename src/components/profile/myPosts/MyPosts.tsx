import style from './MyPosts.module.scss'
import {Post} from "./post/Post";
import React from 'react';
import {ProfilePageType} from "./MyPostsContainer";


export const MyPosts = (props: ProfilePageType) => {

    const posts = props.profilePage.posts
    const newPostText = props.profilePage.newPostText

    let postsMessage = posts.map(el => {
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
        props.onPostChange(text)
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
