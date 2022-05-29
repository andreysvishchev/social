import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {auth} from "../../api/api";


class HeaderContainer extends React.Component <AuthPropsType> {
    componentDidMount() {
       auth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    this.props.setUserDataAC(id, login, email)
                }
            })
    }

    render() {
        return <Header data={this.props.data} isAuth={this.props.isAuth} setUserDataAC={this.props.setUserDataAC} />
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
    setUserDataAC: (id: number, login: string, email: string) => void
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


export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)