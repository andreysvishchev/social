import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component <AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                console.log(response.data)
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data
                    this.props.setUserDataAC(id, login, email)
                    console.log(this.props.setUserDataAC(id, login, email))
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    data: {
        id: null | number,
        login: null | string,
        email: null | string,
    },
    messages: [],
    fieldsErrors: [],
    resultCode: number,
    isAuth: boolean
}

type MapDispatchToProps = {
    setUserDataAC: (id: number, login: string, email: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        data: {
            id: state.auth.data.id,
            login: state.auth.data.login,
            email: state.auth.data.email,
        },
        messages: state.auth.messages,
        fieldsErrors: state.auth.fieldsErrors,
        resultCode: state.auth.resultCode,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)