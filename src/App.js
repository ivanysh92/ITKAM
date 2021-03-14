import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";



const App = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Nav friendsData = {props.state.friendsData}/>
                <div className="app-wrapper-content">
                    {/*<Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>*/}

                    <Route path="/dialogs"
                           render={() => <Dialogs
                               dialogsData={props.state.dialogsData}
                               messageData={props.state.messageData}
                               addMessage = {props.addMessage}
                               newMessageText = {props.state.newMessageText}
                               updateNewMessageText = {props.updateNewMessageText}/>}/>
                    <Route path="/profile"
                           render={() => <Profile
                               postData={props.state.myPostData}
                               addPost = {props.addPost}
                               newPostText = {props.state.newPostText}
                               updateNewPostText = {props.updateNewPostText}/>}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    )
};

export default App;
