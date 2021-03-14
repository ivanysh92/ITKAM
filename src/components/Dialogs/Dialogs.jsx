import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";



const Dialogs = (props) => {

    let textInf = React.createRef();

    let addMessage = () => {
        let textMessage = textInf.current.value;
        props.addMessage(textMessage);
    }

    let onMessageChange = () =>{
        let textMessage = textInf.current.value;
        props.updateNewMessageText(textMessage);
    };


    let dialogElements = props.dialogsData
        .map(userInf => <DialogItems name={userInf.name} id={userInf.id} icon = {userInf.icon}/>)

    let messageElements = props.messageData
        .map(userMessage => (<Messages message={userMessage.message}/>))

    return (
        <div className={s.dialogs}>
            <div>
                {dialogElements}
            </div>

            <div>
                {messageElements}
                <div>
                    <textarea  className={s.textArea}
                               ref={textInf}
                               onChange={onMessageChange}
                               value = {props.newMessageText}/>
                </div>
                <div >
                    <button className={s.btn} onClick={addMessage}>Add post</button>
                </div>
            </div>

            <div>
                {dialogElements}
            </div>
        </div>
    )
}

export default Dialogs;