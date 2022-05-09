import style from "./Profile.module.scss";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div className={style.profile}>

        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />

    </div>
  );
};
