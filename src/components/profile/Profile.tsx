import style from './Profile.module.scss'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import bg from "../../img/bg.jpg";
import {PostsType, ProfilePageType} from "../../redux/state";

type ProfileType = {
    PostsData: ProfilePageType
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={style.profile}>
            <img src={bg} alt="" className={style.profile__bg}/>
            <div className={style.profile__inner}>
                <ProfileInfo/>
                <MyPosts PostsData={props.PostsData.posts}/>
            </div>

        </div>
    )
}

