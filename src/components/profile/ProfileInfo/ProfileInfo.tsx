import style from './ProfileInfo.module.scss'
import React from "react";
import bg from "../../../img/bg.jpg";
import {ProfileType} from "../../../redux/profileReducer";
import {Link, NavLink} from "react-router-dom";

type ProfileInfoType = {
    profile: ProfileType
}


export const ProfileInfo = (props: ProfileInfoType) => {
    const profile = props.profile
    return (
        <div className={style.wrap}>
            <img src={bg} alt="" className={style.bg}/>
            <div className={style.inner}>
                <img className={style.avatar} src={profile.photos.large} alt=""/>
                <div className={style.info}>
                    <h4 className={style.name}>{profile.fullName}</h4>
                    <span className={style.status}>{profile.aboutMe}</span>
                    <span className={style.work}>{profile.lookingForAJobDescription}</span>
                </div>
                <div className={style.socials}>
                    <a className={style.social} target="_blank" href={`https:/${profile.contacts.vk}`}>fb</a>
                    <a className={style.social} target="_blank" href="/">webs</a>
                    <a className={style.social} target="_blank" href="/">vk</a>
                    <a className={style.social} target="_blank" href="/">tw</a>
                    <a className={style.social} target="_blank" href="/">inst</a>
                    <a className={style.social} target="_blank" href="/">you</a>
                    <a className={style.social} target="_blank" href="/">git</a>
                    <a className={style.social} target="_blank" href="/">main</a>
                </div>
            </div>
        </div>


    )
}