import * as axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "cc9a3a5f-cfcb-4a10-8ed9-c3924cf724b0"
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },

    unfollow(u) {
        return instanse.delete(`/follow/${u}`,)
            .then(response => {
                return response.data
            })
    },

    follow(u) {
        return instanse.post(`/follow/${u}`,)
            .then(response => {
                return response.data
            })
    }


}


export const authAPI = {
    setAuthUser(currentPage, pageSize) {
        return instanse.get(`auth/me`,)
            .then(response => {
                return response.data
            })
    }
}


