import React from 'react';
import style from "./Users.module.scss";
import userAvatar from "../../img/userAvatar.png";
import {UserType} from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";

type UsersType = {
    usersPage: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPages: number
    onPageChanged: (currentPage: number) => void
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    isFetching: boolean
}

const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPages;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div className={style.users}>
            <h2 className={style.title}>Найти друзей</h2>
            <div>
                {
                    slicedPages.map((el, i) => {
                        return (
                            <button key={i}
                                    className={props.currentPages === el ? `${style.pagination__button} ${style.selected}` : style.pagination__button}
                                    onClick={() => props.onPageChanged(el)}>{el}</button>
                        )
                    })
                }
            </div>

            {props.isFetching ? <Preloader/> : null}

            {
                props.usersPage.map(el => {
                    return (
                        <div className={style.user} key={el.id}>
                            <div className={`${style.col} ${style.preview}`}>
                                <NavLink to={'/profile/' + el.id}>
                                    <img className={style.avatar}
                                         src={el.photos.small != null ? el.photos.small : userAvatar} alt=""/>
                                </NavLink>

                                <button
                                    onClick={el.followed ? () => props.unfollow(el.id) : () => props.follow(el.id)}
                                    className={el.followed ? `${style.btn} ${style.followed}` : `${style.btn}`}>{el.followed ? 'Удалить из друзей' : 'Добавить в друзья'}</button>
                            </div>
                            <div className={`${style.col} ${style.info}`}>
                                <strong className={style.name}>{el.name}</strong>
                                <span className={style.status}>{el.status}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;