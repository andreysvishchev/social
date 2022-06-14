import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC, setUserDataAC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component <AuthPropsType> {
    componentDidMount() {
       this.props.getAuthUserDataTC()
    }

    render() {
        return <Header data={this.props.data} isAuth={this.props.isAuth} />
    }
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsHeader

type MapStateToPropsType = {
    data: {
        id: null | number,
        login: null | string,
        email: null | string,
    },
    isAuth: boolean
}

export type MapDispatchToPropsHeader = {
    getAuthUserDataTC: ()=> void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        data: {
            id: state.auth.data.id,
            login: state.auth.data.login,
            email: state.auth.data.email,
        },
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)