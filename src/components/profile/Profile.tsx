import style from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React, {useEffect} from "react";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {Navigate, useParams} from "react-router-dom";



export const Profile = () => {

    const {userId} = useParams()
    const dispatch = useDispatch<AppDispatchType>()
    const profile = useSelector<AppStateType, ProfileType>(state => state.profilePage.profile)
    const isAuth = useSelector<AppStateType >(state => state.auth.isAuth)

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId))
        }
    }, [])


    if(!isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={style.profile}>

            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>

        </div>
    );
};
