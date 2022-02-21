import React from "react";
import style from './Post.module.css'

type PostPropsType = {
    id: string
    text: string
    likes: number
}


export const Post = (props: PostPropsType) => {

    return (

        <div className={style.post} id={props.id}>
            <h2 className={style.title}>{props.text}</h2>
            <span>{props.likes}</span>
        </div>
    )
}