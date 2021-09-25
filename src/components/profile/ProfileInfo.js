import ProfileStatus from "./ProfileStatus";

let ProfileInfo = (props) => {

    return (
        <div>
            <div className='photo'>
                <img src={props.profile.photos.large}/>
            </div>
            <div className='fullName'>
                {props.profile.fullName}
            </div>
            <div className='lookingForAJob'>
                {props.profile.lookingForAJob ?
                    <div className='skills'>
                        {props.profile.lookingForAJobDescription}
                    </div>
                    : 'Я бездельник'
                }
            </div>
            <ProfileStatus status='hello my friends'/>
        </div>
    )
}

export default ProfileInfo;