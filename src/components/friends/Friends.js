import Friend from "./Friend";

const Friends = (props) => {

    let friends = props.friends.map( f  => <Friend name={f.name} id={f.id} />)

    return(
        <div className='friends'>
            {friends}
        </div>
    );
}

export default Friends;