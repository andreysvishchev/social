import React from "react";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import Users from "./Users";
import {getUsers} from "../../api/api";


class UsersAPIComponent
    extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.currentPages, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <>
                <Users usersPage={this.props.usersPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPages={this.props.currentPages}
                       onPageChanged={this.onPageChanged}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}
                       toggleIsFollowProgress={this.props.toggleIsFetching}
                       followingIsProgress={this.props.followingIsProgress}
                />
            </>
        )
    }
}

export default UsersAPIComponent