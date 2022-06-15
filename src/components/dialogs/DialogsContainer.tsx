import {InitialStateType, sendMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}

type MapDispatchToPropsType ={
    sendMessage: ()=>void
    onMessageChange: (body:string)=> void
}
export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        onMessageChange: (body: string) => {
            dispatch(updateMessageTextAC(body));
        }
    }
}
compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
