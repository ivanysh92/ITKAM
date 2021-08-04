const SEND_MESSAGE = "SEND-MESSAGE";

let intialState = {
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Bla-bla"},
        {id: 5, message: "He-He"}
    ],
    dialogsData: [
        {id: 1, name: "Ivan", icon: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"},
        {
            id: 2,
            name: "Sergey",
            icon: "https://avatars.mds.yandex.net/get-zen_doc/1641049/pub_5ec9179b6507207c615f04c9_5ec91b8a44070e5cfc4904c7/scale_1200"
        },
        {id: 3, name: "Andrey", icon: "https://sun9-55.userapi.com/c845123/v845123437/1f636b/uU_rgyMrFYQ.jpg"},
        {
            id: 4,
            name: "Deniz",
            icon: "https://i.pinimg.com/originals/37/11/eb/3711ebc20a73570f735a4decb18f506b.jpg"
        },
        {
            id: 5,
            name: "Ruslan",
            icon: "https://s3.eu-central-1.amazonaws.com/river-talks/uploads/photos/2020/11/sngine_9a35e33a61d58328f658d86ebc311fef.jpg"
        }
    ],
};

const messageReducer = (state = intialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: newMessage}],

            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
};


export default messageReducer;
