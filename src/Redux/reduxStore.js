import {combineReducers, createStore} from "redux";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
