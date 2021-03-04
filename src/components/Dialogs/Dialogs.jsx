import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Sergey"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Deniz"},
        {id: 5, name: "Ruslan"}
    ];


    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Bla-bla"},
        {id: 5, message: "He-He"}
    ];

    let dialogElements = dialogsData
        .map(userInf => <DialogItems name={userInf.name} id={userInf.id}/>)

    let messageElements = messageData
        .map(userMessage => (<Messages message={userMessage.message} />))

    return (
        <div className={s.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;