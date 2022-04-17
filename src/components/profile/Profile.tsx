import style from './Profile.module.scss'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import bg from "../../img/bg.jpg";
import {ActionsType, ProfilePageType} from "../../redux/state";

type ProfileType = {
    PostsData: ProfilePageType
    addPost: (action: ActionsType)=> void
    updateNewPostText: (action: ActionsType)=> void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={style.profile}>
            <img src={bg} alt="" className={style.profile__bg}/>
            <div className={style.profile__inner}>
                <ProfileInfo/>
                <MyPosts
                    PostsData={props.PostsData.posts}
                    newPostText={props.PostsData.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>

        </div>
    )
}

