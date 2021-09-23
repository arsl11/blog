import React from 'react'
import DialogItem from "./DialogItem";
import Message from "./Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

//замыкание
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your message' name='newMessageBody' component={Textarea} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form:'addMessageReduxForm'})(AddMessageForm)

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messageElements = state.messages.map( m => <Message message={m.message} key={m.id} id={m.id}/>)

    let addNewMessage = (values) => {
        alert();
        props.sendMessage(values.newMessageBody);
    }

    return(
        <div className="dialogs">
            <div className="dialog-items">
                {dialogElements}
                {messageElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}

export default Dialogs;