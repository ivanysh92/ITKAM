const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let intialState = {
    users: [
        // {id: 1, photoURL: "https://xenforo.com/community/data/avatars/l/137/137455.jpg?1472027263", followed: false, fullname: "Boris", status: "I am a programist", location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, photoURL: "https://yt3.ggpht.com/ytc/AAUvwnib-IWbaLxxFSm1uf2Kxk5u_K9diJ6K4wWR8hwflw=s900-c-k-c0x00ffffff-no-rj", followed: true, fullname: "Serj", status: "I am a WebDeveloper", location: {city: "Moscow", country: "Russia"}},
        // {id: 3, photoURL: "https://sun9-68.userapi.com/c851536/v851536958/e5aa5/ybMSyR_PShY.jpg", followed: false,  fullname: "Nikifor", status: "I am a Full-Stuck", location: {city: "Kiev", country: "Ukraine"}},
        // {id: 4, photoURL: "https://yt3.ggpht.com/a/AATXAJxTy7XfNWpfajyow34W5xYqRirqjx2roiPTCiDMmA=s900-c-k-c0xffffffff-no-rj-mo", followed: true, fullname: "Antony", status: "I am a bandit", location: {city: "Bishkek", country: "Kyrgyzstan"}},
    ]
};

const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users

    }
};
export default usersReducer;