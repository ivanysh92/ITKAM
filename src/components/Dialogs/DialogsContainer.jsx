import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state)=> {
    return {
        messagePage: state.messagePage,
        dialogsData: state.messagePage.dialogsData,
        messageData: state.messagePage.messageData,
        newMessageText: state.messagePage.newMessageText


    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },

        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;