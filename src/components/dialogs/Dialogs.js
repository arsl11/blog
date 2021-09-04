import React from 'react'
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messageElements = state.messages.map( m => <Message message={m.message} key={m.id} id={m.id}/>)

    let newMessageText = state.newMessageText

    let onAddMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);

    }
    return(
        <div className="dialogs">
            <div className="dialog-items">
                {dialogElements}
                {messageElements}
                <div>
                    <textarea onChange={onMessageChange} value={newMessageText}
                              placeholder='Enter your message'>
                    </textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;