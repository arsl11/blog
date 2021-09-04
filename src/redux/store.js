import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    state: {
        postsPage: {
            posts: [
                {id: 1, message: 'It\'s my first post', likesCount: 11},
                {id: 2, message: 'It\'s my second post', likesCount: 12}
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sidebar: {},
        friendsPage: {
            friends: [
                {id: 1, name: 'Bogdan'},
                {id: 2, name: 'Ruslan'},
                {id: 3, name: 'Roma'}
            ]
        }
    }, //private
    callSubscriber() {
        console.log('state was changed')
    }, //private

    getState() {
      return this.state
    },
    subscribe(observer) {
        this.callSubscriber = observer; // pattern observer
    },

    dispatch(action) {// { type: 'ADD-POST' }

        this.state.postsPage = profileReducer(this.state.postsPage, action)
        this.state.messagesPage = dialogsReducer(this.state.messagesPage, action)
        this.state.sidebar = sidebarReducer(this.state.sidebar, action)

        this.callSubscriber(this.state)
    },
}

export default store;
window.store = store;