import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar"
import Profile from './components/profile/Profile'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import FriendsContainer from "./components/friends/FriendsContainer";

const App = () => {
  return (
      <div className="App">
          <Header />
          <NavBar />
            <div class='app-wrapper-content'>
                <Route path='/profile' render={ () => <Profile />}/>
                <Route path='/dialogs' render={ () => <DialogsContainer/>} />
                <Route path='/friends' render={ () => <FriendsContainer/>} />
            </div>
      </div>
  );
}

export default App;
