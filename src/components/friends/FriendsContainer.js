import Friends from "./Friends";


const FriendsContainer = (props) => {

    let state = props.store.getState();

    return(
        <Friends friends={state.friendsPage.friends} />
    );
}

export default FriendsContainer;