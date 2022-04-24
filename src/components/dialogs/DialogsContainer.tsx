import {InitialStateType, sendMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType ={
    sendMessage: ()=>void
    onMessageChange: (body:string)=> void
}
export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
