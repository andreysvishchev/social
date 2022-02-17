import React from "react";
import style from './Post.module.css'

type PostPropsType = {
    text: string
    likes: number
}


export const Post = (props: PostPropsType) => {
    return (
        <div className={style.post}>
            <h2 className={style.title}>{props.text}</h2>
            <span>{props.likes}</span>
        </div>
    )
}