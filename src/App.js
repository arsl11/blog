import React, {Suspense} from 'react'
import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import HeaderContainer from "./components/header/HeaderContainer";
import Preloader from "./components/common/preloader/Preloader";

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
                <Route path='/login'
                       render={ () => {
                           return <Suspense fallback={<Preloader />}>
                               <Login/>
                           </Suspense>
                       }}/>
                <Route path='/profile/:userId?'
                       render={ () => {
                           return <Suspense fallback={<Preloader />}>
                               <ProfileContainer/>
                           </Suspense>
                       }}/>
                <Route path='/dialogs'
                       render={ () => {
                    return <Suspense fallback={<Preloader />}>
                        <DialogsContainer/>
                    </Suspense>
                }}/>
                <Route path='/users' 
                       render={ () => {
                           return <Suspense fallback={<Preloader />}>
                               <UsersContainer/>
                           </Suspense>
                }}/>
            </div>
      </div>
  );
}

export default App;
