import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfleStatusWithHooks";

let ProfileInfo = (props) => {

    return (
        <div>
            <div className='photo'>
                <img src={props.profile.photos.large}/>
            </div>
            <div className='fullName'>
                {props.profile.fullName}
            </div>
            <ProfileStatusWithHooks status={props.profileStatus} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;