import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../Utils/Validate/validators";

const maxLength100 = maxLengthCreator(100);
const minLength5 = minLengthCreator(5);


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"}
                       name={"newMessageBody"}
                       component={Textarea}
                       validate={[requiredField, maxLength100, minLength5]}
                       className={s.textArea}/>
            </div>
            <div>
                <button className={s.btn}>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: "dialogsAddMessageForm"
})(AddMessageForm);

const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogElements = props.dialogsData
        .map(userInf => <DialogItems name={userInf.name} id={userInf.id} icon={userInf.icon}/>)

    let messageElements = props.messageData
        .map(userMessage => (<Messages message={userMessage.message}/>))

    let newMessageText = state.newMessageText;

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogElements}
            </div>

            <div>
                {messageElements}
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>


            <div>
                {dialogElements}
            </div>


        </div>
    )
}


export default Dialogs;