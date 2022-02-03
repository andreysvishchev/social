import bg from "../../img/bg.jpg";
import style from './Profile.module.scss'
import {MyPosts} from "./myPosts/MyPosts";
import React from "react";

export const Profile = () => {
    return (
        <div className={style.Profile}>
            <img src={bg} alt="" className={style.bg}/>
            <div className="user">
                <img src="" alt="" className={style.avatar}/>
                <div className={style.user}>
                    andrey

                </div>
                <MyPosts/>
            </div>
        </div>
    )
}