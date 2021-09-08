import MyPostsContainer from "../posts/MyPostsContainer";
import React from "react";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;