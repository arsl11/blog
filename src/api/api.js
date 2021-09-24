import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '95916453-58a9-4d37-87dd-e95b84098901'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return instance.delete('follow/' + userId)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post('follow/' + userId)
            .then(response => response.data)
    }
}

export const authAPI = {
    auth() {
        return instance.get('auth/me')
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data);
    }
}