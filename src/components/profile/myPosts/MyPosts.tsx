import React from "react";
import style from './MyPosts.module.scss'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.MyPosts}>
            my post
            <div>
                <textarea ></textarea>
                <button>Add Post</button>
            </div>

            <Post/>

        </div>
    )
}

