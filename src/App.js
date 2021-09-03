import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar"
import Dialogs from "./components/dialogs/Dialogs";
import Profile from './components/profile/Profile'
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import FriendsContainer from "./components/friends/FriendsContainer";

const App = (props) => {
  return (
      <div className="App">
          <Header />
          <NavBar />
            <div class='app-wrapper-content'>
                <Route path='/profile' render={ () => <Profile store={props.store}/>} />
                <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/>} />
                <Route path='/friends' render={ () => <FriendsContainer store={props.store} />} />
            </div>
      </div>
  );
}

export default App;
