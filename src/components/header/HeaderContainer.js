import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/reducers/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/selectors/header-selectors";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }

}
const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);