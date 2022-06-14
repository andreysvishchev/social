import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profileReducer";
import {usersApi} from "../../api/api";


const ProfileContainer = (props: UserProfileType) => {

    const {userId} = useParams()
    const dispatch = useDispatch<AppDispatchType>()

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId))
        }
    }, [])

    {
        return (
            <Profile profile={props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}


export type UserProfileType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);

