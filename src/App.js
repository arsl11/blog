import React from 'react'
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar"
import MyPosts from "./components/posts/MyPosts";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Router, Route} from "react-router-dom";
import Friends from "./components/friends/Friends";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <NavBar />
            <div class='app-wrapper-content'>
                <Route path='/posts' render={ () => <MyPosts postPage={props.state.postsPage}
                                                             dispatch={props.dispatch}
                                                             newPostText={props.state.postsPage.newPostText} />} />
                <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage}
                                                               dispatch={props.dispatch}
                                                               newMessageText={props.state.messagesPage.newMessageText} />} />
                <Route path='/friends' render={ () => <Friends state={props.state.friendsPage} />} />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
