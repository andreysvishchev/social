import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {ReactComponent} from "*.svg";



function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component <UserProfileType>{

    componentDidMount() {

     let userId = this.props.router.params.userId ;



        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                // debugger;
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType)=> void
    router: {location: any, navigate: any, params: {userId: string}}
}



export type UserProfileType =  mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));

