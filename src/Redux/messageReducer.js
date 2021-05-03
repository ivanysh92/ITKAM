const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let intialState = {
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Bla-bla"},
        {id: 5, message: "He-He"}
    ],
    newMessageText: ''
};

const messageReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,

            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            break;
    }

    return state;
};


export const addMessageActionCreator = () => {

    return {
        type: ADD_MESSAGE
    }
};
export const updateNewMessageTextActionCreator = (textMessage) => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: textMessage
    }
};

export default messageReducer;
