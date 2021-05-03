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
                <Nav friendsData = {props.state.sidebar.friendsData} dispatch = {props.dispatch}/>
                <div className="app-wrapper-content">
                    {/*<Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>*/}

                    <Route path="/dialogs"
                           render={() => <Dialogs
                               dialogsData={props.state.profilePage.dialogsData}
                               messageData={props.state.messagePage.messageData}
                               dispatch = {props.dispatch}
                               newMessageText = {props.state.messagePage.newMessageText}/>}/>
                    <Route path="/profile"
                           render={() => <Profile
                               postData={props.state.profilePage.myPostData}
                               dispatch = {props.dispatch}
                               newPostText = {props.state.profilePage.newPostText}/>}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    )
};

export default App;
