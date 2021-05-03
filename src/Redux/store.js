import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            myPostData: [
                {id: 1, message: "How are you?", likeCount: 15},
                {id: 1, message: "It's my first message", likeCount: 20},
                {id: 1, message: "It's a fail", likeCount: 30},
                {id: 1, message: "Hi, World", likeCount: 25},
                {id: 1, message: "You are welcome", likeCount: 1}

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
            newPostText: "",
        },
        messagePage: {
            messageData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Bla-bla"},
                {id: 5, message: "He-He"}
            ],
            newMessageText: ''
        },
        sidebar: {
            friendsData: [
                {
                    id: 1,
                    name: "Ivan",
                    icon: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
                },
                {
                    id: 2,
                    name: "Sergey",
                    icon: "https://avatars.mds.yandex.net/get-zen_doc/1641049/pub_5ec9179b6507207c615f04c9_5ec91b8a44070e5cfc4904c7/scale_1200"
                },
                {
                    id: 3,
                    name: "Andrey",
                    icon: "https://sun9-55.userapi.com/c845123/v845123437/1f636b/uU_rgyMrFYQ.jpg"},
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
            ]
        },
    },

    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
// store - OOP