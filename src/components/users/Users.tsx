import style from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import React from "react";
import axios from 'axios';
import userAvatar from '../../img/userAvatar.png'


export const Users = (props: UsersPropsType) => {
    if (props.usersPage.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }



    const usersList = props.usersPage.map(el => {
        return (
            <div className={style.user} key={el.id}>
                <div className={`${style.col} ${style.preview}`}>
                    <img className={style.avatar} src={el.photos.small !=null ? el.photos.small : userAvatar} alt=""/>
                    <button onClick={el.followed ? () => props.unfollow(el.id) : () => props.follow(el.id)}
                            className={el.followed ? `${style.btn} ${style.followed}` : `${style.btn}`}>{el.followed ? 'Удалить из друзей' : 'Добавить в друзья'}</button>
                </div>
                <div className={`${style.col} ${style.info}`}>
                    <strong className={style.name}>{el.name}</strong>
                    <span className={style.status}>{el.status}</span>
                </div>
            </div>
        )
    })

    return (
        <div className={style.users}>
            <h2 className={style.title}>Найти друзей</h2>
            {usersList}
        </div>
    )
}