import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";


const ProfileContainer = (props: UserProfileType) => {

    const {userId} = useParams()

    useEffect(()=> {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
    },[])

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

