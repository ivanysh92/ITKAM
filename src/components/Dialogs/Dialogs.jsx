import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";



const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogElements = props.dialogsData
        .map(userInf => <DialogItems name={userInf.name} id={userInf.id} icon = {userInf.icon}/>)

    let messageElements = props.messageData
        .map(userMessage => (<Messages message={userMessage.message}/>))

    let newMessageText = state.newMessageText;


    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) =>{
        let body = event.target.value;
        props.updateNewMessageText(body);
    };

    return (
        <div className={s.dialogs}>
            <div>
                {dialogElements}
            </div>

            <div>
                {messageElements}
                <div>
                    <textarea  className={s.textArea}
                               onChange={onMessageChange}
                               value = {newMessageText}/>
                </div>
                <div >
                    <button className={s.btn} onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

            <div>
                {dialogElements}
            </div>
        </div>
    )
}

export default Dialogs;