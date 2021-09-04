const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Arslan'},
        {id: 2, name: 'Radik'},
        {id: 3, name: 'Farida'},
        {id: 4, name: 'Ilfan'}
    ],
    messages: [
        {id: 1, message: 'I am Arslan'},
        {id: 2, message: 'I am Radik'},
        {id: 3, message: 'I am Farida'},
        {id: 4, message: 'I am Ilfan'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: ' ',
                messages: [...state.messages, newMessage]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;