import {connect} from "react-redux";
import {
    followTC, getUsersTC, pageChangedTC, unfollowTC, UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";

type MapStateToPropsType = {
    usersPage: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingIsProgress: Array<string>
}

type MapDispatchToPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    pageChangedTC: (currentPage: number, pageSize: number) => void
    followTC: (userID: string) => void
    unfollowTC: (userID: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.pageChangedTC(currentPage, this.props.pageSize)
    }

    render() {
        return (
            <>
                <Users usersPage={this.props.usersPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPages={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       unfollow={this.props.unfollowTC}
                       follow={this.props.followTC}
                       isFetching={this.props.isFetching}
                       followingIsProgress={this.props.followingIsProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    getUsersTC, pageChangedTC, unfollowTC, followTC
})(UsersComponent);