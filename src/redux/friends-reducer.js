let initialState = {
    friends: [
        {id: 1, name: 'Bogdan'},
        {id: 2, name: 'Ruslan'},
        {id: 3, name: 'Roma'}
    ]
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}

export default friendsReducer;
