import React from "react";
import style from './MyPosts.module.scss'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.myPosts}>
        <h3 className={style.myPosts__title}>Мои посты</h3>
            <div>
                <textarea className={style.myPosts__textarea} />
                <button className={style.myPosts__button}>Add Post</button>
            </div>

            <Post/>

        </div>
    )
}

