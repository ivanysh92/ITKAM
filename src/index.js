import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost = {store.addPost.bind(store)}
                     updateNewPostText = {store.updateNewPostText.bind(store)}
                     addMessage = {store.addMessage.bind(store)}
                     updateNewMessageText = {store.updateNewMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));
};

reRenderEntireTree(store.getState());

store.subscribe(reRenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();