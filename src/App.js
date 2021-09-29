import React, {Suspense} from 'react'
import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import HeaderContainer from "./components/header/HeaderContainer";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const Login = React.lazy(() => import('./components/Login'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer')) 


const App = () => {
  return (
      <div className="App">
          <HeaderContainer />
          <NavBar />
            <div class='app-wrapper-content'>
                <Route path='/login' render={withSuspense(Login)}/>
                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                <Route path='/users' render={ withSuspense(UsersContainer)}/>
            </div>
      </div>
  );
}

export default App;
