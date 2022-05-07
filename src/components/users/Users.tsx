import React from "react";
import style from "./Users.module.scss";
import userAvatar from "../../img/userAvatar.png";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let curP = this.props.currentPages;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div className={style.users}>
                <h2 className={style.title}>Найти друзей</h2>
                <div>
                    {
                        slicedPages.map((el, i) => {
                            return (
                                <button key={i}
                                        className={this.props.currentPages === el ? `${style.pagination__button} ${style.selected}` : style.pagination__button}
                                        onClick={() => this.onPageChanged(el)}>{el}</button>
                            )
                        })
                    }
                </div>
                {
                    this.props.usersPage.map(el => {
                        return (
                            <div className={style.user} key={el.id}>
                                <div className={`${style.col} ${style.preview}`}>
                                    <img className={style.avatar}
                                         src={el.photos.small != null ? el.photos.small : userAvatar} alt=""/>
                                    <button
                                        onClick={el.followed ? () => this.props.unfollow(el.id) : () => this.props.follow(el.id)}
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
        )
    }
}

export default Users