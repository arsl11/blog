const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;