import style from './Profile.module.scss'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import bg from "../../img/bg.jpg";

export const Profile = () => {
    return (
        <div className={style.profile}>
            <img src={bg} alt="" className={style.profile__bg}/>
            <div className={style.profile__inner}>
                <ProfileInfo/>
                <MyPosts/>
            </div>

        </div>
    )
}

