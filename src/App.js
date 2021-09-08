import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar"
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";


const App = () => {
  return (
      <div className="App">
          <Header />
          <NavBar />
            <div class='app-wrapper-content'>
                <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
                <Route path='/dialogs' render={ () => <DialogsContainer/>} />
                <Route path='/users' render={ () => <UsersContainer />} />
            </div>
      </div>
  );
}

export default App;
