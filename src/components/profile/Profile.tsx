import style from "./Profile.module.scss";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import React from "react";
import bg from "../../img/bg.jpg";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";



export const Profile = () => {

  return (
    <div className={style.profile}>
      <img src={bg} alt="" className={style.profile__bg} />
      <div className={style.profile__inner}>
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    </div>
  );
};
