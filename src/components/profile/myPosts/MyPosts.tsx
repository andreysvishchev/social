import style from './MyPosts.module.scss'
import {Post} from "./post/Post";
import {PostsType} from "../../../redux/state";
import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';


type PostsDataType = {
    PostsData: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}

export const MyPosts = (props: PostsDataType) => {

    /*    let [posts, setPosts] = useState<PostsType[]>(props.PostsData)*/

    /*    let [value, setValue] = useState<string>('')

        let addPost = (text: string) => {
            let post = {id: v1(), text: text, likesCount: 0}
            let newPost = [post, ...posts]
            setPosts(newPost)
        }

        const onClickHandler = () => {
            addPost(value)
            setValue('')
        }

        const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
            setValue(event.currentTarget.value)
        }

        const onPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter') {
                addPost(value)
                setValue('')
            }
        }*/

    let postsMessage = props.PostsData.map(el => {
        return (
            <Post key={el.id} id={el.id} text={el.text} likes={el.likesCount}/>
        )
    })

    let newPostElement = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>

    const addPost = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={style.myPosts}>
            <textarea ref={newPostElement}
                      className={style.textarea}
                      value={props.newPostText}
                      onChange={onChangeHandler}/>
            <button className={style.button} onClick={addPost}>Добавить запись</button>
            <h3 className={style.myPosts__title}>Мои посты</h3>

            {postsMessage}


        </div>
    )
}
