import React from 'react'
import DialogItem from "./DialogItem";
import Message from "./Message";
import {Field, reduxForm} from "redux-form";


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

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your message' name='newMessageBody' component='textarea' />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form:'addMessageReduxForm'})(AddMessageForm)

export default Dialogs;