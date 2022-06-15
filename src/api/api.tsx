import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e7389ced-4c78-445b-8036-e7450704056b'
    }
})

export const usersApi = {
    getUsers(currentPages: number, pageSize: number) {
        return instance.get(`users?page=${currentPages}&count=${pageSize}`,)
            .then((response) => {
                return response.data
            })
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`, {})
            .then((response) => {
                return response.data
            })
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`,)
            .then((response) => {
                return response.data
            })
    },
    auth() {
        return instance.get(`auth/me`)
            .then((response) => {
                return response.data
            })
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
}

