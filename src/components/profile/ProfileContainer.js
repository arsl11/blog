import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {requestProfile, requestProfileStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.PureComponent {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.requestProfile(userId);
        this.props.requestProfileStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} profileStatus={this.props.profileStatus} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
});


export default compose(
    connect(mapStateToProps, {requestProfile, requestProfileStatus, updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer);