let store = {
    _state: {

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

        messageData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Bla-bla"},
            {id: 5, message: "He-He"}
        ],

        friendsData: [
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

        newMessageText: ''
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

    addPost() {
        let newPost = {
            id: 6,
            message: this._state.newPostText,
            likeCount: 10
        };
        this._state.myPostData.push(newPost);
        this._state.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.newMessageText,

        };
        this._state.messageData.push(newMessage);
        this._state.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessageText) {
        this._state.newMessageText = newMessageText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type = "ADD-POST") {
            let newPost = {
                id: 6,
                message: this._state.newPostText,
                likeCount: 10
            };
            this._state.myPostData.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type = "UPDATE-NEW-POST-TEXT") {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type = "ADD-MESSAGE") {
            let newMessage = {
                id: 6,
                message: this._state.newMessageText,

            };
            this._state.messageData.push(newMessage);
            this._state.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type = "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }
};


export default store;
window.store = store;
// store - OOP