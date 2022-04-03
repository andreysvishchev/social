import React from "react";
import style from './Post.module.css'
import avatar from './../../../../img/1.jpg'

type PostPropsType = {
    id: string
    text: string
    likes: number
}


export const Post = (props: PostPropsType) => {

    return (

        <div className={style.post} id={props.id}>
            <img className={style.avatar} src={avatar} alt="avatar"/>
            <h2 className={style.title}>{props.text}</h2>
            <span className={style.like}>{props.likes}</span>
        </div>
    )
}