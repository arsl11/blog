import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {requestProfile, requestProfileStatus, updateStatus} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getProfile, getProfileStatus} from "../../redux/selectors/profile-selectors";

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
    profile: getProfile(state),
    profileStatus: getProfileStatus(state),
});


export default compose(
    connect(mapStateToProps, {requestProfile, requestProfileStatus, updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer);