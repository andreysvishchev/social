import style from './MyPosts.module.scss'
import {Post} from "./post/Post";
import {PostsType, state} from "../../../redux/state";
import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";


type PostsDataType = {
    PostsData: PostsType[]
}

export const MyPosts = (props: PostsDataType) => {

    let [posts, setPosts] = useState<PostsType[]>(props.PostsData)

    let [value, setValue] = useState<string>('')

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


    return (
        <div className={style.myPosts}>


            <textarea className={style.textarea} onChange={onChangeHandler} value={value}/>
            <button className={style.button} onClick={onClickHandler}>Add Post</button>

            <h3 className={style.myPosts__title}>Мои посты</h3>


            {
                posts.map((p, i) => <Post key={i} id={p.id} text={p.text} likes={p.likesCount}/>)
            }


        </div>
    )
}
