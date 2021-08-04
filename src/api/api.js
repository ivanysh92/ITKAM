import * as axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "ace4ef88-7012-4420-923f-bee003eb91c9"
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },

    unfollow(userId) {
        return instanse.delete(`follow/${userId}`)
    },

    follow(userId) {
        return instanse.post(`follow/${userId}`)
    }


}

export const authAPI = {
    setAuthUser() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}


export const profileAPI = {
    getProfileUser(userId) {
        return instanse.get(`profile/${userId}`)
    },
    getUserStatus(userId){
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instanse.put(`profile/status`, {status: status})
    }
}

