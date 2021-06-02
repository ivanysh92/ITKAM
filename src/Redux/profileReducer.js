const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

let intialState = {
    myPostData: [
        {id: 1, message: "How are you?", likeCount: 15},
        {id: 2, message: "It's my first message", likeCount: 20},
        {id: 3, message: "It's a fail", likeCount: 30},
        {id: 4, message: "Hi, World", likeCount: 25},
        {id: 5, message: "You are welcome", likeCount: 1}

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
    profile: null,
};

const profileReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likeCount: 10
            };
           return  {...state,
               myPostData: [...state.myPostData, newPost],
               newPostText: ""
           };

        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE:
            return {...state,
                profile: action.profile
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;