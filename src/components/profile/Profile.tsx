import style from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import bg from "../../img/bg.jpg";
import {ActionsType, ProfilePageType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

type PropsType = {
   store: StoreType
}

export const Profile = (props: PropsType) => {

    const state = props.store.getState()
    const postData = state.profilePage
    const dispatch = props.store.dispatch.bind(props.store)

    return (
        <div className={style.profile}>
            <img src={bg} alt="" className={style.profile__bg}/>
            <div className={style.profile__inner}>
                <ProfileInfo/>
                <MyPostsContainer
                    PostsData={postData}
                    dispatch={dispatch}
                />
            </div>

        </div>
    )
}

