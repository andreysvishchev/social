import style from './ProfileInfo.module.scss'
import React from "react";
import bg from "../../../img/bg.jpg";
import {ProfileType} from "../../../redux/profileReducer";
import {Link, NavLink} from "react-router-dom";
import userAvatar from '../../../img/userAvatar.png'

type ProfileInfoType = {
    profile: ProfileType
}


export const ProfileInfo = (props: ProfileInfoType) => {
    const profile = props.profile
    return (
        <div className={style.wrap}>
            <img src={bg} alt="" className={style.bg}/>
            <div className={style.inner}>
                <img className={style.avatar} src={profile.photos.large !== null ? profile.photos.large : userAvatar} alt=""/>
                <div className={style.info}>
                    <h4 className={style.name}>Имя: <span>{profile.fullName}</span></h4>
                    <span className={style.status}>{profile.aboutMe}</span>
                    <span className={style.work}>{profile.lookingForAJobDescription}</span>
                </div>
                <div className={style.socials}>
                    <a className={style.social} target="_blank" href={`https:/${profile.contacts.vk}`}>ВКонтакте</a>
                    <a className={style.social} target="_blank" href={`https:/${profile.contacts.website}`}>Вебсайт</a>
                    <a className={style.social} target="_blank" href={`https:/${profile.contacts.facebook}`}>Facebook</a>
                    <a className={style.social} target="_blank" href={`https:/${profile.contacts.twitter}`}>twitter</a>
                    <a className={style.social} target="_blank" href={`https:/${profile.contacts.instagram}`}>instagram</a>
                </div>
            </div>
        </div>


    )
}