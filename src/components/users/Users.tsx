import style from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import React from "react";


export const Users = (props: UsersPropsType) => {


    const usersList = props.usersPage.users.map(el => {
        return (
            <div className={style.user}>
                <div className={`${style.col} ${style.preview}`}>
                    <img className={style.avatar} src={el.avatar} alt=""/>
                    <button onClick={el.followed ? () => props.unfollow(el.id) : () => props.follow(el.id)}
                            className={el.followed ? `${style.btn} ${style.followed}`: `${style.btn}` }>{el.followed ? 'Удалить из друзей' : 'Добавить в друзья'}</button>
                </div>
                <div className={`${style.col} ${style.info}`}>
                    <strong className={style.name}>{el.firstName} {el.lastName}</strong>
                    <span className={style.status}>{el.status}</span>
                </div>
                <div className={`${style.col} ${style.location}`}>
                    <span className={style.country}>{el.location.country}</span>
                    <span className={style.city}>{el.location.city}</span>
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