import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login";


const App = () => {
  return (
      <div className="App">
          <HeaderContainer />
          <NavBar />
            <div class='app-wrapper-content'>
                <Route path='/login' render={ () => <Login />}/>
                <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
                <Route path='/dialogs' render={ () => <DialogsContainer />} />
                <Route path='/users' render={ () => <UsersContainer />} />
            </div>
      </div>
  );
}

export default App;
