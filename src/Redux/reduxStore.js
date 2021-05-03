import {combineReducers, createStore} from "redux";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
