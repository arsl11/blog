import React from 'react'
import {addMessageActionCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/selectors/dialogs-selectors";

let mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        },
    }
}

// const AuthRedirectComponent = withAuthRedirect(Dialogs);

export default compose(
    connect(mapStateToProps, mapDispatchToProps))(Dialogs);