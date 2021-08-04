import React from "react";
import {
    sendMessageCreator
} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import authRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state)=> {
    return {
        messagePage: state.messagePage,
        dialogsData: state.messagePage.dialogsData,
        messageData: state.messagePage.messageData,
        newMessageText: state.messagePage.newMessageText,


    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
};

export default compose(
    authRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
