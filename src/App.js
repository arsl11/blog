import React from 'react'
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar"
import MyPosts from "./components/posts/MyPosts";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import Friends from "./components/friends/Friends";

const App = (props) => {
  return (
      <div className="App">
          <Header />
          <NavBar />
            <div class='app-wrapper-content'>
                <Route path='/posts' render={ () => <MyPosts state={props.state.profilePage}
                                                             dispatch={props.dispatch}/>} />
                <Route path='/dialogs' render={ () => <Dialogs store={props.store}/>} />
                <Route path='/friends' render={ () => <Friends state={props.state.friendsPage} />} />
            </div>
      </div>
  );
}

export default App;
