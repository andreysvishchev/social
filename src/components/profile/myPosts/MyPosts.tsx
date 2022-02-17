import React, {ChangeEvent, useState} from "react";
import style from './MyPosts.module.scss'
import {Post} from "./Post/Post";

export const MyPosts = () => {


    let [post, setPost] = useState([
        {id: 1, text: 'My first post', likesCount: 3},
        {id: 1, text: 'My last post', likesCount: 11},
    ])

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
    }




    return (
        <div className={style.myPosts}>

            <textarea className={style.textarea} onChange={onChangeHandler}/>
            <button className={style.button}>Add Post</button>

            <h3 className={style.myPosts__title}>Мои посты</h3>

            {
                post.map((p, i) => <Post key={i} text={p.text} likes={p.likesCount}/> )
            }




        </div>
    )
}

