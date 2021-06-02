import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator()

        /*       this.props.toggleIsFetching(true);

               userAPI.getUsers(this.props.currentPage, this.props.pageSize)
                   .then(data => {
                       this.props.toggleIsFetching(false);
                       this.props.setUsers(data.items);
                       this.props.setTotalUserCount(data.totalCount);
                   });*/
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUsersThunkCreator
    })(UsersContainer);


